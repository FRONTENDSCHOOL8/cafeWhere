import { HeaderBar, TabBar } from '@/components/atoms';
import CafeListItem from '@/components/organisms/CafeListItem/CafeListItem';
import pb from '@/utils/pocketbase';
import { useEffect, useState } from 'react';

function MyWishPage() {
  const userId = JSON.parse(localStorage.getItem('pocketbase_auth')).model.id;

  const [wishCafe, setWishCafe] = useState([]);

  useEffect(() => {
    const fetchDeta = async () => {
      const resultList = await pb.collection('wish').getList(1, 50, {
        filter: `email~'${userId}'`,
      });

      setWishCafe(resultList.items);
    };
    fetchDeta();
  }, []);

  console.log(wishCafe);

  return (
    <div>
      <HeaderBar name={'찜한 카페'} />
      {wishCafe.map((data) => (
        <CafeListItem data={data} />
      ))}
      <TabBar />
    </div>
  );
}

export default MyWishPage;
