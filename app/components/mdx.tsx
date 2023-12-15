'use client';
import Image from 'next/image';
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { MDXComponents } from 'mdx/types';

const components = {
  Image,
};

interface MdxProps {
  code: string;
}

import Link from 'next/link';

const mdxComponents: MDXComponents = {
  a: ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link href={href as string} target='_blank' rel='noopener noreferrer'>
      {children}
    </Link>
  ),
  img: ({ src, alt }: { src: string; alt: string }) => (
    <Image src={src} alt={alt} width={520} height={520} />
  ),
};

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={mdxComponents} />;
}
