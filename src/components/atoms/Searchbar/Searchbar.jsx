import { useWordStore } from '@/store';
import useSearchTermStore from '@/store/useSearchTermStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar() {
  const navigate = useNavigate();
  const { searchTerm, setSearchTerm } = useSearchTermStore();
  const { words, setWords } = useWordStore();

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!words.includes(searchTerm)) {
      setWords([...words, searchTerm]);
    }

    navigate(`/searchResult/${searchTerm}`);
    setSearchTerm('');
  };

  useEffect(() => {
    setSearchTerm('');
  }, [navigate]);

  return (
    <form
      className="mx-5 flex items-center overflow-hidden rounded-xl bg-gray-200 p-3"
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
