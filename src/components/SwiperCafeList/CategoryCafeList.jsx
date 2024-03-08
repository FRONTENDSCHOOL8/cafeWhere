import { Wish } from '@/components/atoms';
import Hashtag from '../atoms/Hashtag/Hashtag';
import { pbImg } from '@/utils/pocketbase';

// * 추후에 사진크기 조절
function CategoryCafeList({ data }) {
  return (
    <div className="ml-5 h-285pxr w-200pxr rounded-[12px] border border-greyscale-50 bg-additional-colors-white p-4 font-medium leading-[100%]">
      <div className="relative">
        <img
          src={`${pbImg(data.collectionId, data.id, data.mainImage)}`}
          alt="현재 카페 상세페이지"
        />
        <div className="absolute bottom-2 right-2">
          <Wish />
        </div>
      </div>
      <span className="mb-2 mt-4 inline-block">{data.cafeName}</span>
      <div className="flex text-10pxr">
        <span className="mr-2">☕️ {data.score}</span>
        <span>리뷰 {data.reviewQuantity}</span>
      </div>
      <Hashtag icon={'🍰'} keyword={'디저트가 맛있어요'} />
    </div>
  );
}

export default CategoryCafeList;
