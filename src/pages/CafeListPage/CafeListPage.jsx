import { HeaderBar, TabBar } from '@/components/atoms';
import CafeListItem from '@/components/organisms/CafeListItem/CafeListItem';
import { useCafeListStore, useRegionStore } from '@/store';
import pb from '@/utils/pocketbase';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CafeListPage() {
  const { region } = useRegionStore();
  const { setCafeList } = useCafeListStore();
  const params = useParams();
  const cafeList = JSON.parse(sessionStorage.getItem('cafeList'));

  useEffect(() => {
    const fetchData = async () => {
      const resultList = await pb.collection('cafe').getList(1, 50, {
        filter: `category~'${params.keyword}' && address~'${region}'`,
      });
      setCafeList(resultList.items);
      sessionStorage.setItem('cafeList', JSON.stringify(resultList.items));
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-3 pb-32">
        <HeaderBar name={'카페리스트'} />
        {cafeList?.map((item) => (
          <CafeListItem data={item} />
        ))}
      </div>
      <TabBar />
    </>
  );
}

export default CafeListPage;
