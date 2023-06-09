import type { FC } from 'react';

interface SearchBoxProps {
  searchKey: string;
  handleChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const SearchBox: FC<SearchBoxProps> = ({ searchKey, handleChange }) => {
  return (
    <div className="w-full max-w-md mx-auto bg-border/20 flex items-center rounded-full px-4 py-2">
      <input
        type="text"
        name="search"
        value={searchKey}
        onChange={handleChange}
        autoFocus
        autoComplete="off"
        placeholder="Search all blogs..."
        className="bg-transparent w-full outline-none placeholder:text-border"
      />
    </div>
  );
};
export default SearchBox;
