import HeaderSwiper from '@/components/HeaderSwiper/HeaderSwiper';
import CategoryListName from '@/components/SwiperCafeList/CategoryListName';
import SwiperCafeList from '@/components/SwiperCafeList/SwiperCafeList';
import { MainHeader, TabBar } from '@/components/atoms';
import CafeListItem from '@/components/organisms/CafeListItem/CafeListItem';
import { useTabStore, useRegionStore } from '@/store';
import pb from '@/utils/pocketbase';
import { useEffect } from 'react';
import Category from '@/components/organisms/Category/Category';
import { useQuery } from '@tanstack/react-query';
import Footer from './../../components/atoms/Footer/Footer';

function MainPage() {
  const { activeTabState, setHome } = useTabStore();
  const { region } = useRegionStore();

  const {
    data: cafeData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['cafeData', region],
    queryFn: async () =>
      await pb.collection('cafe').getFullList({
        filter: `address~'${region}'`,
        sort: '-created',
      }),
    enabled: !!region,
  });

  useEffect(() => {
    setHome();
  }, [region]);

  return (
    <div>
      <div className="h-full">
        <div className="mx-auto w-full min-w-375pxr max-w-680pxr pb-8">
          <MainHeader />
          <HeaderSwiper />
          <Category />
          <div className="mt-12">
            <CategoryListName>노트북하기 최적화?!</CategoryListName>
            <SwiperCafeList data={cafeData} />
          </div>
          <div className="mt-12">
            <CategoryListName>너도 나도 인스타 업로드!!</CategoryListName>
            <SwiperCafeList data={cafeData} />
          </div>
          <div className="mt-12">
            <CategoryListName>전체보기</CategoryListName>
            <div className="flex flex-col gap-4">
              {cafeData &&
                cafeData.map((data) => (
                  <CafeListItem key={data.id} data={data} />
                ))}
            </div>
          </div>
        </div>
        <Footer />
        <TabBar />
      </div>
    </div>
  );
}

export default MainPage;
