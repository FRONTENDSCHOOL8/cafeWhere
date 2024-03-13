import ReviewKeywordsRank from '@/components/atoms/ReviewKeywordsRank/ReviewKeywordsRank';
import NoReview from '@/components/organisms/DetailReviewList/NoReview';
import ReviewList from '@/components/organisms/DetailReviewList/ReviewList';
import { useCafeStore } from '@/store';

function DetailReview() {
  const { cafe } = useCafeStore();
  return (
    <>
      <ReviewKeywordsRank />
      {cafe?.reviewQuantity > 0 ? <ReviewList /> : <NoReview />}
    </>
  );
}

export default DetailReview;
