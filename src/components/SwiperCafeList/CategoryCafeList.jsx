import { Wish } from '@/components/atoms';

function CategoryCafeList() {
  return (
    <>
      <h2 className="mb-4 ml-5 text-20pxr font-semibold leading-5">
        노트북 하기 최적화?!
      </h2>
      <div className="bg-additional-colors-white border-greyscale-50 ml-5 h-285pxr w-200pxr rounded-[12px] border p-4 font-medium leading-[100%]">
        <div className="relative">
          <img src="/images/main/test.png" alt="현재 카페 상세페이지" />
          <div className="absolute bottom-2 right-2">
            <Wish />
          </div>
        </div>
        <span className="mb-2 mt-4 inline-block">카페 이름 넣어야 할 곳</span>
        <div className="flex text-10pxr">
          <span className="mr-2">☕️ 4.5</span>
          <span>리뷰 0</span>
        </div>
        {/* 해시태그 넣을 자리 */}
      </div>
    </>
  );
}

export default CategoryCafeList;
