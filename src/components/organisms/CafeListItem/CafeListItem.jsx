import { Wish } from '@/components/atoms';
import CafeReviewInfo from '@/components/atoms/CafeReviewInfo/CafeReviewInfo';
import Hashtag from '@/components/atoms/Hashtag/Hashtag';
import { pbImg } from '@/utils/pocketbase';
import { Link } from 'react-router-dom';

function CafeListItem({ data }) {
  return (
    <Link
      to={`/detail/${data.id}`}
      className="mx-5 flex gap-4 rounded-xl border border-greyscale-50 p-3"
    >
      <div className="relative h-120pxr w-200pxr">
        <img
          src={`${pbImg(data.collectionId, data.id, data.mainImage)}`}
          alt="cafeList"
          className="h-full w-full rounded-xl"
        />
        <div
          className="absolute bottom-2 right-2"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <Wish />
        </div>
      </div>

      <div className="flex w-full flex-col gap-2">
        <h3 className="text-base font-semibold text-greyscale-100">
          {data.cafeName}
        </h3>
        <span className="text-overflow-ellipsis inline-block overflow-hidden text-12pxr text-greyscale-80">
          {data.description}
        </span>
        <CafeReviewInfo data={data} />
        <ul className="flex flex-wrap items-center">
          <li className="my-1 mr-1">
            {data.expand
              ? data.expand.hashtag.map((item) => (
                  <Hashtag
                    key={item.id}
                    icon={item.icon}
                    keyword={item.keyword}
                  />
                ))
              : ''}
          </li>
        </ul>
      </div>
    </Link>
  );
}

export default CafeListItem;
