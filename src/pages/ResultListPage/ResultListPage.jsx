import SearchField from '@/components/molecules/SearchField/SearchField';
import CafeListItem from '@/components/organisms/CafeListItem/CafeListItem';

//! 데이터 불러와야 함
// const CAFELIST_URL = `${import.meta.env.VITE_PB_URL}/api/collections/cafe/records`;
// const getData = async () => {
//   const response = await fetch(CAFELIST_URL);
//   const data = await response.json();

//   return data.items;
// };
// const cafeList = await getData();
// console.log(cafeList);

//! 필터 넣어야 함
function ResultListPage() {
  return (
    <div className="h-screen">
      <div className="mx-auto h-full w-full min-w-375pxr max-w-680pxr">
        <SearchField />
        <span>총 건이 검색되었습니다.</span>
        <CafeListItem />
      </div>
    </div>
  );
}

export default ResultListPage;
