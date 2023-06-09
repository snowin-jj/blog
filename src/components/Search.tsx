import { type FC, useState, useMemo } from 'react';
import type { Post } from '@types';
import SearchBox from '@components/SearchBox';
import { formatDate } from '@utils/formatDate';

interface SearchProps {
  posts: Post[];
}

export const Search: FC<SearchProps> = ({ posts }) => {
  const [searchKey, setSearchKey] = useState<string>('');

  let filteredPosts = useMemo(
    () =>
      posts.filter((p) =>
        p.frontmatter.title.toLowerCase().includes(searchKey.toLowerCase())
      ),
    [searchKey, posts]
  );

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchKey(e.currentTarget.value);
  };

  return (
    <main className="flex flex-col items-center gap-12">
      <SearchBox searchKey={searchKey} handleChange={handleChange} />
      <div className="w-full flex flex-col gap-5 md:gap-10">
        {filteredPosts && filteredPosts.length !== 0 ? (
          filteredPosts.map((post) => (
            <div className="flex items-start gap-6" key={post.frontmatter.date}>
              <p className="flex flex-col items-start gap-2 font-poppins font-light min-w-max">
                <span>
                  {formatDate(post.frontmatter.date, {
                    month: true,
                    day: true,
                  })}
                </span>
                <span>{formatDate(post.frontmatter.date, { year: true })}</span>
              </p>
              <a href={post.url} className="flex flex-col items-start gap-2">
                <h1 className="font-bold">{post.frontmatter.title}</h1>
                <p className="font-light">{post.frontmatter.description}</p>
              </a>
            </div>
          ))
        ) : (
          <p>No post :(</p>
        )}
      </div>
    </main>
  );
};
