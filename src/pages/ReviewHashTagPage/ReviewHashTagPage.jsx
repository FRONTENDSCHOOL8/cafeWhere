import { Link } from 'react-router-dom';
import { AllHashtagList } from '..';
import { useCafeStore } from '@/store';

function ReviewHashTagPage() {
  const { cafe } = useCafeStore();

  return (
    <div className="flex flex-col items-center justify-center gap-8 rounded-xl">
      <span className="mt-10 text-20pxr font-semibold">
        어떤 점이 좋았나요?
      </span>
      <AllHashtagList />
      <Link to={`/reviewWrite`}>
        <button
          type="button"
          className="mb-10 h-48pxr w-120pxr rounded-lg bg-[#654E3C] text-white"
        >
          다음
        </button>
      </Link>
    </div>
  );
}

export default ReviewHashTagPage;
