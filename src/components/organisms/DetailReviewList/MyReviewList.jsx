import CoffeeScore from '@/components/atoms/CoffeeScore/CoffeeScore';
import Hashtag from '@/components/atoms/Hashtag/Hashtag';
import { useEffect, useState } from 'react';
import HashtagCard from './HashtagCard';
import pb, { pbImg } from '@/utils/pocketbase';

function MyReviewList({ data }) {
  return (
    <article
      key={data.id}
      className=" min-w-335pxr rounded-[15px] border border-greyscale-40 p-5"
    >
      <div className="flex items-center">
        <span className="mr-5pxr text-15pxr font-semibold text-additional-colors-dark">
          {data.cafeName}
        </span>
        <CoffeeScore score={data.score} />
      </div>
      <p className="mb-1 mt-1pxr text-12pxr text-greyscale-60">
        {data.updated.slice(0, 10)}
      </p>
      <div className="mb-3 grid auto-cols-max grid-flow-col gap-2pxr">
        {data.image.map((img) => (
          <img
            key={img}
            className="h-90pxr w-90pxr"
            src={pbImg(data.collectionId, data.id, img)}
            alt={data.cafeName}
          />
        ))}
      </div>
      <p className="mb-2 text-13pxr text-greyscale-80">{data.contents}</p>
      <HashtagCard review={data} />
    </article>
  );
}

export default MyReviewList;
