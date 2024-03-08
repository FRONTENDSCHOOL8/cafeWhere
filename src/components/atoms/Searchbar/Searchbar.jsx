import { useState } from 'react';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // 검색 로직을 여기에 추가
    console.log('검색어:', searchTerm);
  };

  return (
    <div className="flex w-full items-center overflow-hidden rounded-[11px] bg-[#EFEFEF] p-10pxr">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="검색어를 입력하세요"
        className="w-full bg-[#EFEFEF] focus:outline-none"
      />
      <button type="button" onClick={handleSearch} className="bg-[#EFEFEF]">
        <img src="/glass.svg" alt="검색" />
      </button>
    </div>
  );
}

export default SearchBar;
