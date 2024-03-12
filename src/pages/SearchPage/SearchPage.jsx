import SwiperCafeList from '@/components/SwiperCafeList/SwiperCafeList';
import { HeaderBar, TabBar } from '@/components/atoms';
import SearchBar from '@/components/atoms/Searchbar/Searchbar';
import { useSearchCafeListStore, useWordStore } from '@/store';
import useSearchTermStore from '@/store/useSearchTermStore';
import pb from '@/utils/pocketbase';
import { useEffect, useState } from 'react';

const spanStyle = 'flex flex-col py-4 px-5';

function SearchPage() {
  const { searchCafeList, setSearchCafeList } = useSearchCafeListStore();
  const { searchTerm } = useSearchTermStore();
  const [loading, setLoading] = useState(true); // 로딩 상태 추가

  const { words } = useWordStore();

  const fetchData = async () => {
    setLoading(true); // 데이터 가져오는 중이라는 상태 설정
    const filteredCafes = await pb.collection('cafe').getFullList({
      filter: `cafeName~'${searchTerm}'`,
    });
    setSearchCafeList(filteredCafes);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, [searchTerm]); // 검색어가 변경될 때마다 데이터 다시 가져오기

  return (
    <>
      <section className="mx-auto h-svh w-full min-w-375pxr max-w-680pxr text-xs font-bold leading-5">
        <HeaderBar name="카페 검색하기" />
        <SearchBar />

        {loading ? (
          <div>Loading...</div> // 데이터를 가져오는 동안 로딩 메시지 표시
        ) : (
          <>
            <div>
              <span className={spanStyle}>최근 검색한 단어</span>
              <div className="mx-5 flex gap-3">
                {words.map((item) => (
                  <button className="rounded-lg border px-2 py-1">
                    {item} <span>x</span>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <span className={spanStyle}>최근 본 항목</span>
              <SwiperCafeList data={searchCafeList} />
            </div>
            <div>
              <span className={spanStyle}>카테고리별 추천</span>
              <SwiperCafeList data={searchCafeList} />
            </div>
            <div></div>
          </>
        )}
        <TabBar />
      </section>
    </>
  );
}

export default SearchPage;
