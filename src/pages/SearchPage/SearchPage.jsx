import SwiperCafeList from '@/components/SwiperCafeList/SwiperCafeList';
import SearchField from '@/components/molecules/SearchField/SearchField';

const spanStyle = 'flex flex-col py-4 px-5';

function SearchPage() {
  return (
    <>
      <section className="mx-auto h-full w-full min-w-375pxr max-w-680pxr text-xs font-bold leading-5 ">
        <SearchField />
        <div>
          <span className={spanStyle}>최근 검색한 단어</span>
          {/* 최근 검색 단어 컴포넌트 */}
        </div>
        <div>
          <span className={spanStyle}>최근 본 항목</span>
          <SwiperCafeList />
        </div>
        <div>
          <span className={spanStyle}>카테고리별 추천</span>
          <SwiperCafeList />
        </div>
      </section>
    </>
  );
}

export default SearchPage;
