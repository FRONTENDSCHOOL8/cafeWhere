import { Wish } from '@/components/atoms';

function CategoryCafeList() {
  return (
    <>
      <h2 className="mb-16pxr ml-20pxr text-20pxr">노트북 하기 최적화?!</h2>
      <div className="bg-additional-colors-white border-greyscale-50 ml-20pxr h-285pxr w-200pxr rounded-[12px] border p-16pxr font-medium leading-[100%]">
        <div className="relative">
          <img src="/images/main/test.png" alt="현재 카페 상세페이지" />
          <div className="absolute bottom-8pxr right-8pxr">
            <Wish />
          </div>
        </div>
        <span className="mb-8pxr mt-16pxr inline-block">
          카페 이름 넣어야 할 곳
        </span>
        <div className="flex text-10pxr">
          <span className="mr-8pxr">☕️ 4.5</span>
          <span>리뷰 0</span>
        </div>
        {/* 해시태그 넣을 자리 */}
      </div>
    </>
  );
}

export default CategoryCafeList;
