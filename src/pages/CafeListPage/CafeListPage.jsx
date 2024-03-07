import CafeListItem from '@/components/organisms/CafeListItem/CafeListItem';
import pb from '@/utils/pocketbase';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { HeaderBar, TabBar } from '@/components/atoms';

function CafeListPage() {
  const params = useParams();
  console.log(params.keyword);
  const [cafe, setCafe] = useState([]);

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
