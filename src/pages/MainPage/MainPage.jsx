import HeaderSwiper from '@/components/HeaderSwiper/HeaderSwiper';
import CategoryListName from '@/components/SwiperCafeList/CategoryListName';
import SwiperCafeList from '@/components/SwiperCafeList/SwiperCafeList';
import { MainHeader, TabBar } from '@/components/atoms';
import CafeListItem from '@/components/organisms/CafeListItem/CafeListItem';
import Category from '@/components/organisms/Category/Category';
import { useRegionStore } from '@/store';
import pb from '@/utils/pocketbase';
import { useQuery } from '@tanstack/react-query';
import Footer from './../../components/atoms/Footer/Footer';

function MainPage() {
  const { region } = useRegionStore();

  const { data: cafeData } = useQuery({
    queryKey: ['cafeData', region],
    queryFn: async () =>
      await pb.collection('cafe').getFullList({
        filter: `address~'${region}'`,
        sort: '-created',
      }),
    enabled: !!region,
  });

  return (
    <>
      <div className="pb-8">
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
    </>
  );
}

export default MainPage;
