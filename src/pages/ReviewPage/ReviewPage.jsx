import { HeaderBar, TabBar } from '@/components/atoms';
import ReviewList from '@/components/organisms/DetailReviewList/ReviewList';
import pb from '@/utils/pocketbase';
import { useEffect, useState } from 'react';

function ReviewPage() {
  const userId = JSON.parse(localStorage.getItem('pocketbase_auth')).model.id;
  const [review, setReview] = useState([]);

  useEffect(() => {
    const fetchDeta = async () => {
      const resultList = await pb.collection('review').getList(1, 50, {
        filter: `email='${userId}'`,
      });
      setReview(resultList);
    };
    fetchDeta();
  }, []);

  console.log(review);
  return (
    <>
      <HeaderBar name={'내가 쓴 리뷰'} />
      {review.items?.map((data) => (
        <ReviewList key={data.id} data={data} />
      ))}
      <TabBar />
    </>
  );
}

export default ReviewPage;
