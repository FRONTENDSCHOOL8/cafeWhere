import CoffeeScore from '@/components/atoms/CoffeeScore/CoffeeScore';
import Hashtag from '@/components/atoms/Hashtag/Hashtag';
import { useEffect, useState } from 'react';
import HashtagCard from './HashtagCard';
import pb from '@/utils/pocketbase';

function ReviewList() {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    handleCheck();
  }, []);

  const handleCheck = async () => {
    const records = await pb.collection('review').getList(1, 50, {
      sort: '-created',
      expand: 'hashtag',
    });

    setReviewData(records.items);
  };

  return (
    <>
      {reviewData.map((data) => {
        return (
          <div key={data.id} className="mx-5 flex justify-center">
            <article className="w-335pxr rounded-[15px] border border-greyscale-40 p-5">
              <div className="flex items-center">
                <span className="mr-5pxr text-15pxr font-semibold text-additional-colors-dark">
                  {data.userId}
                </span>
                <CoffeeScore score={data.score} />
              </div>
              <p className="mb-1 mt-1pxr text-12pxr text-greyscale-60">{}</p>
              <div className="mb-3 grid grid-cols-3 gap-2pxr">
                <img src="/images/review/test.png" alt="김밤비!!! 사진" />
                <img src="/images/review/test.png" alt="김밤비!!! 사진" />
                <img src="/images/review/test.png" alt="김밤비!!! 사진" />
              </div>
              <p className="mb-2 text-13pxr text-greyscale-80">
                {data.contents}
              </p>
              <HashtagCard review={data} />
            </article>
          </div>
        );
      })}
    </>
  );
}

export default ReviewList;
