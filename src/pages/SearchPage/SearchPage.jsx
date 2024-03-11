import React, { useEffect, useState } from 'react';
import pb from '@/utils/pocketbase';
import SearchField from '@/components/molecules/SearchField/SearchField';
import SwiperCafeList from '@/components/SwiperCafeList/SwiperCafeList';
import NoResult from '@/components/atoms/NoResult/NoResult';

const spanStyle = 'flex flex-col py-4 px-5';

function SearchPage() {
  const [cafes, setCafes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true); // 로딩 상태 추가
  const [noResult, setNoResult] = useState(false); // 결과 없음 상태 추가
  const [totalResults, setTotalResults] = useState(0); // 총 검색 결과 수 상태 추가

  const fetchData = async () => {
    setLoading(true); // 데이터 가져오는 중이라는 상태 설정
    const filteredCafes = await pb.collection('cafe').getFullList({
      filter: `cafeName~'${searchTerm}'`,
    });
    setCafes(filteredCafes);
    setLoading(false); // 데이터 가져오기 완료 상태 설정
    setTotalResults(filteredCafes.length); // 검색 결과의 총 갯수 설정
    setNoResult(filteredCafes.length === 0); // 검색 결과가 없는지 확인하여 결과 없음 상태 설정
  };

  useEffect(() => {
    fetchData();
  }, [searchTerm]); // 검색어가 변경될 때마다 데이터 다시 가져오기

  const handleSearch = async (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <>
      <section className="mx-auto h-screen w-full min-w-375pxr max-w-680pxr text-xs font-bold leading-5">
        <SearchField
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onSearch={handleSearch}
        />
        {loading ? (
          <div>Loading...</div> // 데이터를 가져오는 동안 로딩 메시지 표시
        ) : noResult ? (
          <div className="flex h-full items-center justify-center">
            <NoResult />
          </div>
        ) : (
          <>
            <span className={spanStyle}>
              총 {totalResults}건이 검색되었습니다.
            </span>
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
            <div></div>
          </>
        )}
      </section>
    </>
  );
}

export default SearchPage;
