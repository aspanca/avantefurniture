import type { CollectionEntry } from 'astro:content';
import { SPACES } from './site';

export function getProjectImages(project: CollectionEntry<'projects'>) {
  const urls = [project.data.image, ...(project.data.gallery ?? [])].filter(
    (src): src is string => Boolean(src)
  );
  const unique = [...new Set(urls)];

  return unique.map((src) => ({
    src,
    alt: project.data.title,
  }));
}

export function getProjectHref(project: CollectionEntry<'projects'>) {
  return `/spaces/${project.data.category}/${project.slug}`;
}

export function getSpaceLabel(category: CollectionEntry<'projects'>['data']['category']) {
  return SPACES[category].title;
}
