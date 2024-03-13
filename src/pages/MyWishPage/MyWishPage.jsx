import { HeaderBar, TabBar } from '@/components/atoms';
import CafeListItem from '@/components/organisms/CafeListItem/CafeListItem';
import pb from '@/utils/pocketbase';
import { useEffect, useState } from 'react';
import SelectLoginPage from '../SelectLoginPage/SelectLoginPage';
import ReviewWrite from '@/components/organisms/ReviewWrite/ReviewWrite';

function MyWishPage() {
  const userId = JSON.parse(localStorage.getItem('pocketbase_auth')).model.id;

  const [wishCafe, setWishCafe] = useState([]);
  const loginCheck = sessionStorage.getItem('token');

  useEffect(() => {
    const fetchDeta = async () => {
      const resultList = await pb.collection('wish').getList(1, 50, {
        filter: `email~'${userId}'`,
      });

      setWishCafe(resultList.items);
    };
    fetchDeta();
  }, []);

  return (
    <div className="h-svh pb-32">
      {loginCheck ? (
        <>
          <HeaderBar name={'찜한 카페'} />
          {wishCafe.map((data) => (
            <CafeListItem data={data} />
          ))}
          <TabBar />
        </>
      ) : (
        <SelectLoginPage />
      )}
    </div>
  );
}

export default MyWishPage;
