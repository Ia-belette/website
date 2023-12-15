import { allPosts } from 'contentlayer/generated';
import { format, parseISO } from 'date-fns';
import fr from 'date-fns/locale/fr';
import { notFound } from 'next/navigation';
import { Mdx } from '@/app/components/mdx';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { Footer } from '@/app/components/footer';

export const runtime = 'edge';

export const generateStaticParams = () => {
  return allPosts.map((post: any) => ({ slug: post._raw.flattenedPath }));
};

export const generateMetadata = ({ params }: any) => {
  const post = allPosts.find(
    (post: any) => post._raw.flattenedPath === params.slug
  );
  return {
    title: post?.title,
    description: post?.description,
    images: [
      {
        url: `${post?.mainImage}`,
        width: 1200,
        height: 630,
        alt: post?.title,
      },
    ],
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      url: `https://dereje.fr/post/${post?._raw.flattenedPath}`,
      title: post?.title,
      images: [
        {
          url: `${post?.mainImage}`,
          width: 1200,
          height: 630,
          alt: post?.title,
        },
      ],
      description: post?.description,
    },
    twitter: {
      title: post?.title,
      site: `https://dereje.fr/post/{post?._raw.flattenedPath}`,
      images: [
        {
          url: `${post?.mainImage}`,
          width: 1200,
          height: 630,
          alt: post?.title,
        },
      ],
      description: post?.description,
    },
    creator: post?.title,
  };
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className='prose prose-headings:text-white/90 prose-p:text-white/75 prose-a:text-white/75 prose-ul:text-white/75 mx-auto w-full max-w-3xl px-6 py-12 antialiased sm:px-12 md:px-12 md:py-20'>
      <header>
        <Link
          href='/'
          className='flex items-center gap-1 text-white/75 no-underline hover:text-white/90'
        >
          <ChevronLeft size={16} /> Retour
        </Link>
        <div className='flex flex-col'>
          <p>
            {post.author} -{' '}
            <time className='mt-4 text-white/75'>
              {format(parseISO(post.date), 'd LLLL, yyyy', { locale: fr })}
            </time>
          </p>
          <h1 className='mb-0 mt-2'>{post.title}</h1>
          <p className='mt-4'>{post.description}</p>
        </div>
      </header>
      <article className='prose-hr:border-1 prose-strong:text-white/80 prose-img:w-full prose-img:rounded-md prose-hr:mx-auto prose-hr:max-w-[200px] prose-hr:border-white/50'>
        <Mdx code={post?.body.code} />
      </article>
      <div className='not-prose'>
        <Footer />
      </div>
    </main>
  );
};

export default PostLayout;
