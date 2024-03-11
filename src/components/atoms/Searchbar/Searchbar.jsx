import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form
      className="mx-5 flex w-full items-center overflow-hidden rounded-xl bg-gray-200 p-3"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="검색어를 입력하세요"
        className="w-full bg-gray-200 text-base font-medium focus:outline-none"
      />
      <button type="submit">
        <img src="/glass.svg" alt="검색" />
      </button>
    </form>
  );
}

export default SearchBar;
