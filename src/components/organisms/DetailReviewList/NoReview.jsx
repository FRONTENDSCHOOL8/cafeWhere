// import { Link } from 'react-router-dom';

function NoReview() {
  return (
    <div className="my-5 flex h-220pxr min-w-375pxr max-w-680pxr flex-col items-center justify-center gap-4 border-y border-greyscale-40 leading-4">
      <img src="/images/detail/noReview.svg" alt="리뷰 없을때 나오는 커피" />
      <span>작성된 리뷰가 없습니다.</span>
      {/* 리뷰작성 페이지 나오고 Link태그로 수정 */}
      {/* <Link  to="/">+ 리뷰작성</Link> */}
      <button className="h-30pxr w-120pxr rounded bg-[#D9D9D9]" type="button">
        + 리뷰작성
      </button>
    </div>
  );
}

export default NoReview;
