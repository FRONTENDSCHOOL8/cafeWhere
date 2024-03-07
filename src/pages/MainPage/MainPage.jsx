import HeaderSwiper from '@/components/HeaderSwiper/HeaderSwiper';
import CategoryListName from '@/components/SwiperCafeList/CategoryListName';
import SwiperCafeList from '@/components/SwiperCafeList/SwiperCafeList';
import { MainHeader, TabBar } from '@/components/atoms';
import CafeListItem from '@/components/organisms/CafeListItem/CafeListItem';
import { useTabStore } from '@/store/useTabStore';
import pb from '@/utils/pocketbase';
import { useEffect, useState } from 'react';
import Category from '@/components/organisms/Category/Category';

function MainPage() {
  const { activeTabState, setHome } = useTabStore();
  const [region, setRegion] = useState('종로구');
  const [cafeList, setCafeList] = useState([]);

  useEffect(() => {
    setHome();
    const fetchData = async () => {
      const resultList = await pb.collection('cafe').getList(1, 4, {
        filter: `address~'${region}'`,
        sort: '-created',
      });

      setCafeList(resultList.items);
    };
    fetchData();
  }, [region]);

  /* 상태관리 라이브러리 사용예정 */

  return (
    <div>
      <div className="h-full">
        <div className="mx-auto w-full min-w-375pxr max-w-680pxr">
          <MainHeader region={region} setRegion={setRegion} />
          <HeaderSwiper />
          <Category />
          <div className="mt-12">
            <CategoryListName>노트북하기 최적화?!</CategoryListName>
            <SwiperCafeList />
          </div>
          <div className="mt-12">
            <CategoryListName>너도 나도 인스타 업로드!!</CategoryListName>
            <SwiperCafeList />
          </div>
          <div className="mt-12">
            <CategoryListName>전체보기</CategoryListName>
            <div className="flex flex-col gap-4">
              {cafeList.map((data) => (
                <CafeListItem key={data.id} data={data} />
              ))}
            </div>
          </div>
        </div>
        <TabBar />
      </div>
    </div>
  );
}

export default MainPage;
