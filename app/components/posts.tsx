import Link from 'next/link';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { format, parseISO } from 'date-fns';
import fr from 'date-fns/locale/fr';

export const Posts = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <section>
      <h2 className='pt-4 md:px-4'>
        <span className='text-1xl font-medium text-white/80'>Posts</span>
      </h2>
      {posts.map((post) => (
        <PostCard key={post.title} post={post} />
      ))}
    </section>
  );
};

export const PostCard = ({ post }: { post: Post }) => {
  return (
    <Link href={`${post.url}`}>
      <div className='mt-14 border border-transparent md:mt-4 md:rounded-md md:p-4 md:transition-all md:hover:border md:hover:border-[#1db954]/5 md:hover:bg-[#1db954]/5'>
        <time className='mb-4 flex text-sm text-white/80'>
          {format(parseISO(post.date), 'd LLLL, yyyy', { locale: fr })}
        </time>
        <h2 className='text-1xl flex gap-2 font-medium text-white/80 hover:text-white/100'>
          {post.title}
        </h2>
        <p className='mt-4 leading-normal text-white/80'>{post.description}</p>
      </div>
    </Link>
  );
};
