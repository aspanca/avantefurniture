import type { CollectionEntry } from 'astro:content';

export function getPostImages(post: CollectionEntry<'posts'>) {
  const urls = [post.data.image, ...(post.data.gallery ?? [])].filter(
    (src): src is string => Boolean(src)
  );
  const unique = [...new Set(urls)];

  return unique.map((src) => ({
    src,
    alt: post.data.title,
  }));
}
