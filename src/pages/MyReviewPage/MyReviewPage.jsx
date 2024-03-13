import { HeaderBar, TabBar } from '@/components/atoms';
import MyReviewList from '@/components/organisms/DetailReviewList/MyReviewList';
import pb from '@/utils/pocketbase';
import { useEffect, useState } from 'react';
import { SelectLoginPage } from '..';

function MyReviewPage() {
  const UserId = JSON.parse(localStorage.getItem('pocketbase_auth')).model.id;
  const [reviewRecord, setReviewRecord] = useState([]);
  const loginCheck = sessionStorage.getItem('token');

  const handleReview = async () => {
    const records = await pb.collection('review').getList(1, 50, {
      sort: '-created',
      expand: 'hashtag',
      filter: `users="${UserId}"`,
    });

    setReviewRecord(records.items);
  };

  useEffect(() => {
    handleReview();
  }, []);

  return (
    <>
      {loginCheck ? (
        <>
          <div className="px-6">
            <HeaderBar name={'내가 쓴 리뷰'} />

            <ul className="flex flex-col gap-2">
              {reviewRecord.map((data) => {
                return (
                  <li key={data.id}>
                    <MyReviewList data={data} />
                  </li>
                );
              })}
            </ul>
          </div>
          <TabBar />
        </>
      ) : (
        <SelectLoginPage />
      )}
    </>
  );
}

export default MyReviewPage;

// 비동기 호출 get
export async function loader() {
  return await pb.collection('review').getList(1, 4, {
    sort: '-created',
  });
}
