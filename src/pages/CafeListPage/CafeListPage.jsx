import { HeaderBar, TabBar } from '@/components/atoms';
import CafeListItem from '@/components/organisms/CafeListItem/CafeListItem';
import { useCafeStore } from '@/store';
import pb from '@/utils/pocketbase';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function CafeListPage() {
  const params = useParams();
  const { cafe, setCafe } = useCafeStore();

  useEffect(() => {
    const fetchData = async () => {
      const resultList = await pb.collection('cafe').getList(1, 50, {
        filter: `category~'${params.keyword}'`,
      });
      setCafe(resultList.items);
    };
    fetchData();
  }, []);

  return (
    <>
      <HeaderBar name={'카페리스트'} />
      <div className="flex flex-col gap-3">
        {cafe.map((item) => (
          <CafeListItem data={item} />
        ))}
      </div>
      <TabBar />
    </>
  );
}

export default CafeListPage;
