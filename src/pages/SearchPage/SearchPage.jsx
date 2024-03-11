import { useEffect, useState } from 'react';
import pb from '@/utils/pocketbase';
import SearchField from '@/components/molecules/SearchField/SearchField';
import SwiperCafeList from '@/components/SwiperCafeList/SwiperCafeList';

const spanStyle = 'flex flex-col py-4 px-5';

// 검색시 인풋 초기화 시켜야됨..

function SearchPage() {
  const [cafes, setCafes] = useState([]);
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태 추가

  const fetchData = async () => {
    const allCafes = await pb.collection('cafe').getFullList();
    setCafes(allCafes);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = async () => {
    const filteredCafes = await pb.collection('cafe').getFullList({
      filter: `cafeName~'${searchTerm}'`,
    });
    setCafes(filteredCafes);
  };

  return (
    <>
      <section className="mx-auto h-full w-full min-w-375pxr max-w-680pxr text-xs font-bold leading-5 ">
        <SearchField
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSearch={handleSearch}
        />
        <div>
          <span className={spanStyle}>최근 검색한 단어</span>
          {/* 최근 검색 단어 컴포넌트 */}
        </div>
        <div>
          <span className={spanStyle}>최근 본 항목</span>
          <SwiperCafeList data={cafes} />
        </div>
        <div>
          <span className={spanStyle}>카테고리별 추천</span>
          <SwiperCafeList data={cafes} />
        </div>
      </section>
    </>
  );
}

export default SearchPage;
