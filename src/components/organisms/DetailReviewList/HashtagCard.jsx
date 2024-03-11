import Hashtag from '@/components/atoms/Hashtag/Hashtag';
import { useState } from 'react';

const HashtagCard = ({ review }) => {
  const [isExpand, setIsExpand] = useState(false);
  const isCreatedReview = review.hashtag.length;
  const firstReviewData = isCreatedReview ? review.expand.hashtag[0] : '';

  const handleExpand = () => {
    setIsExpand(true);
  };

  return (
    <div>
      {isCreatedReview && (
        <Hashtag
          icon={firstReviewData.icon}
          keyword={firstReviewData.keyword}
        />
      )}
      {review.hashtag.length > 1 &&
        review.expand.hashtag.map((item, index) => {
          if (index != 0) {
            if (isExpand)
              return (
                <Hashtag
                  key={item.id}
                  icon={item.icon}
                  keyword={item.keyword}
                />
              );
          }
        })}
      {!isExpand && (
        <Hashtag
          keyword={`+${review.hashtag.length - 1}`}
          handleClickEvent={handleExpand}
        />
      )}
    </div>
  );
};

export default HashtagCard;
