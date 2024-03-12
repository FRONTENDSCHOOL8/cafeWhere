import { useCafeStore } from '@/store';
import { Link } from 'react-router-dom';

function ReviewButton() {
  const { cafe } = useCafeStore();

  return (
    <Link
      to={`/reviewWrite/${cafe.id}`}
      className="fixed bottom-0 z-30 w-full max-w-680pxr rounded-t-xl bg-[#D9D9D9] py-15pxr text-center text-24pxr font-semibold text-[#151515]"
    >
      리뷰작성
    </Link>
  );
}

export default ReviewButton;
