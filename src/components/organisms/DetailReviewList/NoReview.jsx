// import { Link } from 'react-router-dom';

import { useCafeStore } from '@/store';
import { Link } from 'react-router-dom';

function NoReview() {
  const { cafe } = useCafeStore();

  return (
    <div className="my-5 flex h-220pxr min-w-375pxr max-w-680pxr flex-col items-center justify-center gap-4 border-y border-greyscale-40 leading-4">
      <img src="/images/detail/noReview.svg" alt="리뷰 없을때 나오는 커피" />
      <span>작성된 리뷰가 없습니다.</span>
      <Link
        to={`/reviewWrite/${cafe.id}`}
        className="flex h-30pxr w-120pxr items-center justify-center rounded bg-[#D9D9D9]"
        type="button"
      >
        + 리뷰작성
      </Link>
    </div>
  );
}

export default NoReview;
