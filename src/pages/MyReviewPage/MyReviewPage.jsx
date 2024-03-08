import { HeaderBar, TabBar } from '@/components/atoms';
import { useUserDataStore, useUserIdStore } from '@/store/useLoginStore';
import { useLoaderData } from 'react-router-dom';
import pb from '@/utils/pocketbase';
import { useEffect } from 'react';
import { useState } from 'react';

function MyReviewPage() {
  const { userDataState } = useUserDataStore();
  const { UserId } = useUserIdStore();

  const [reviewRecord, setReviewRecord] = useState([]);
  const userReviewData = useLoaderData();

  const handleReview = async () => {
    const records = await pb.collection('review').getList(1, 4, {
      sort: '-created',
      filter: `email="${UserId}"`,
    });

    console.log(userReviewData);
    console.log('UserId는', UserId);
    console.log('Userdata는', userDataState);
    console.log('db는', records.items);

    setReviewRecord(records.items);
  };

  useEffect(() => {
    handleReview();
  }, []);

  return (
    <div className="w-full">
      <HeaderBar name={'내가 쓴 리뷰'} />
      <button onClick={handleReview}>test</button>
      {/* <Link to="/myreview?size=123">
        데이터 가져오기(with &apos;?size=123&apos;)
      </Link> */}
      <ul>
        {reviewRecord.map((data) => {
          return (
            <li key={data.id}>
              <span>카페이름 : {data.cafeName}</span>
              <span>리뷰 정보 : {data.contents}</span>
              <span>점수 : {data.score}</span>
              <br />
            </li>
          );
        })}
      </ul>

      <TabBar />
    </div>
  );
}

export default MyReviewPage;

// 비동기 호출 get
export async function loader() {
  return await pb.collection('review').getList(1, 2, {
    sort: '-created',
  });
}
