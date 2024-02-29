import { Wish } from '@/components/atoms';

function CafeListItem({ cafeName, cafeDescription, hash }) {
  return (
    <div className="mx-5 flex justify-center">
      <article className="h-120px flex w-335pxr gap-4 rounded-xl border border-greyscale-50 p-3">
        <div className="relative w-1/2">
          <img
            src="/cafeList.jpg"
            alt="cafeList"
            className="h-full w-full rounded-xl"
          />
          <div className="absolute bottom-2 right-2">
            <Wish />
          </div>
        </div>

        <div>
          <h3 className="text-16pxr font-semibold text-greyscale-100">
            {cafeName}
          </h3>
          <span className="text-10pxr text-greyscale-80	">
            {cafeDescription}
          </span>
          <p className="my-3 flex gap-2 text-10pxr">
            <span>☕ 4.5</span>
            <span>리뷰 0</span>
          </p>
          <div className="flex w-fit gap-1 rounded px-2 py-1 text-10pxr font-semibold shadow-[2px_2px_4px_0_rgba(0,0,0,0.25)]">
            <span>☕</span>
            <span>{hash}</span>
          </div>
        </div>
      </article>
    </div>
  );
}

export default CafeListItem;
