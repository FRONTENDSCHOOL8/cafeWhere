import { Wish } from '@/components/atoms';
import Hashtag from '../atoms/Hashtag/Hashtag';
import { pbImg } from '@/utils/pocketbase';
import { Link } from 'react-router-dom';
import CafeReviewInfo from '../atoms/CafeReviewInfo/CafeReviewInfo';

function CategoryCafeList({ data }) {
  return (
    <div className="ml-5 h-285pxr w-200pxr rounded-[12px] border border-greyscale-50 bg-additional-colors-white p-4 font-medium leading-[100%]">
      <div className="relative">
        <img
          className="h-140pxr w-168pxr rounded-xl"
          src={`${pbImg(data.collectionId, data.id, data.mainImage)}`}
          alt="현재 카페 리스트"
        />
        <div className="absolute bottom-2 right-2">
          <Wish />
        </div>
      </div>
      <Link to={`/detail/${data.id}`} className="w-full">
        <div>
          <span className="mb-2 mt-4 inline-block">{data.cafeName}</span>
          <CafeReviewInfo data={data} />
          {data.expand
            ? data.expand.hashtag.map((item) => (
                <Hashtag
                  key={item.id}
                  icon={item.icon}
                  keyword={item.keyword}
                />
              ))
            : ''}
        </div>
      </Link>
    </div>
  );
}

export default CategoryCafeList;
