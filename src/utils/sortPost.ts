import type { Post } from '@types';

export const sortByDate = (a: Post, b: Post) => {
  if (a.frontmatter.date > b.frontmatter.date) {
    return -1;
  }

  if (b.frontmatter.date > a.frontmatter.date) {
    return 1;
  }

  return 0;
};
