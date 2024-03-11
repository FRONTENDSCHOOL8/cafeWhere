import SearchField from '@/components/molecules/SearchField/SearchField';
import CafeListItem from '@/components/organisms/CafeListItem/CafeListItem';
import pb from '@/utils/pocketbase';
import { useEffect, useState } from 'react';

// 카페명, 리뷰 별점, 리뷰 갯수, 해시태그

//! 해당 컴포넌트 사용시 router 필요
function ResultListPage() {
  const [cafes, setCafes] = useState([]);

  const fetchData = async () => {
    const allCafes = await pb.collection('cafe').getFullList();
    setCafes(allCafes);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-screen">
      <div className="mx-auto h-full w-full min-w-375pxr max-w-680pxr">
        <SearchField />
        <span>총 건이 검색되었습니다.</span>
        {cafes.map((data) => (
          <CafeListItem key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
}

export default ResultListPage;
