import { Post, allPosts } from 'contentlayer/generated';
import { parseISO } from 'date-fns';

const generatedSortPostData = allPosts.sort((a, b) => {
  return parseISO(b.date).getTime() - parseISO(a.date).getTime();
});

const URL = 'https://dereje.fr';

function generateSiteMap(posts: Post[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${URL}</loc>
     </url>
      <url>
       <loc>${URL}/mentions-legales</loc>
     </url>
     ${posts
       .map(({ url }) => {
         return `
           <url>
               <loc>${URL}${`${url}`}</loc>
           </url>
         `;
       })
       .join('')}
   </urlset>
 `;
}

export function GET() {
  const posts = generatedSortPostData;
  const body = generateSiteMap(posts);

  return new Response(body, {
    status: 200,
    headers: {
      'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
      'content-type': 'application/xml',
    },
  });
}
