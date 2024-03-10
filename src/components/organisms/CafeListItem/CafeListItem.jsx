import { Wish } from '@/components/atoms'; // Wish 컴포넌트 불러오기
import Hashtag from '@/components/atoms/Hashtag/Hashtag';
import { pbImg } from '@/utils/pocketbase'; // PocketBase 라이브러리 불러오기
import { Link } from 'react-router-dom'; // Link 컴포넌트 불러오기

function CafeListItem({ data }) {
  return (
    <div className="mx-5 flex ">
      <article className="flex w-335pxr gap-4 rounded-xl border border-greyscale-50 p-3">
        <div className="relative h-120pxr w-1/2">
          <img
            src={`${pbImg(data.collectionId, data.id, data.mainImage)}`}
            alt="cafeList"
            className="h-full w-full rounded-xl"
          />
          <div className="absolute bottom-2 right-2">
            <Wish />
          </div>
        </div>

        <Link to={`/detail/${data.id}`} className="w-160pxr overflow-hidden">
          <h3 className="text-14pxr font-semibold text-greyscale-100">
            {data.cafeName}
          </h3>
          <span className="text-overflow-ellipsis inline-block overflow-hidden text-10pxr text-greyscale-80">
            {data.description}
          </span>
          <p className="my-3 flex gap-2 text-10pxr">
            <span>☕ {data.score}</span>
            <span>리뷰 {data.reviewQuantity}</span>
          </p>
          <ul className="flex flex-wrap items-center">
            <li className="my-1 mr-1">
              <Hashtag icon={'🍰'} keyword={'디저트가 맛있어요'} />
            </li>
          </ul>
        </Link>
      </article>
    </div>
  );
}

export default CafeListItem;
