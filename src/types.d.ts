import type { MarkdownInstance } from 'astro';

export enum ActiveTab {
  home = 'home',
  blog = 'blog',
  about = 'about',
  guestJournals = 'guest journals',
}

export interface PostFrontmatter {
  title: string;
  date: string;
  description: string;
}

interface Post extends MarkdownInstance<PostFrontmatter> {}
