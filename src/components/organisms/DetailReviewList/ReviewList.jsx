import pb from '@/utils/pocketbase';
import Hashtag from '../../atoms/Hashtag/Hashtag';

function ReviewList() {
  return (
    <div className="mx-5 flex justify-center text-greyscale-80">
      <article className="w-335pxr rounded-[15px] border border-greyscale-40 p-5">
        <span className="mr-2 text-14pxr font-semibold text-additional-colors-dark">
          닉네임 넣을 곳
        </span>
        <img
          className="inline-block"
          src="/images/review/property-0.5.svg"
          alt="0.5점짜리 평점"
        />
        <p className="mb-1 mt-6pxr text-10pxr">24.03.06</p>
        <p className="mb-2 mr-6 min-w-180pxr text-12pxr">
          어머 여기 카페 너무 맛있고 분위기도 좋고 너무 좋아여!!! 어머 여기 카페
          너무 맛있고 분위기도 좋고 너무 좋아여!!! 어머 여기 카페 너무 맛있고
          분위기도 좋고 너무 좋아여!!!좋아여!!! 어머 여기 카페 너무 맛있고
          분위기도 좋고 너무 좋아여!!!좋아여!!! 어머 여기 카페 너무 맛있고
          분위기도 좋고 너무 좋아여!!!
        </p>
        <img
          className="h-90pxr w-90pxr"
          src="/images/review/test.png"
          alt="김밤비!!! 사진"
        />
        <Hashtag icon={'☕️'} keyword={'커피가 맛있어요'} />
      </article>

      {/* 효진님이 주심 코드 이미지 옆에 */}
      <article className="w-335pxr rounded-[15px] border border-greyscale-40 p-20pxr">
        <span className="mr-2 text-14pxr font-semibold text-additional-colors-dark">
          닉네임 넣을 곳
        </span>
        <img
          className="inline-block"
          src="/images/review/property-0.5.svg"
          alt="0.5점짜리 평점"
        />
        <p className="mb-1 mt-6pxr text-10pxr">24.03.06</p>
        <div className="flex">
          <div>
            <p className="mb-2 mr-6 min-h-54pxr min-w-180pxr text-12pxr">
              어머 여기 카페 너무 맛있고 분위기도 좋고 너무 좋아여!!! 어머 여기
              카페 너무 맛있고 분위기도 좋고 너무 좋아여!!! 어머 여기 카페 너무
              맛있고 분위기도 좋고 너무 좋아여!!! 어머 여기 카페 너무 맛있고
              분도 좋고 너무 좋아여!!! 어머 여기 카페 너무 맛있고 분도 좋고 너무
              좋아여!!! 어머 여기 카페 너무 맛있고 분도 좋고 너무 좋아여!!! 어머
              여기 카페 너무 맛있고 분도 좋고 너무 좋아여!!! 어머 여기 카페 너무
              맛있고 분
            </p>
            <Hashtag icon={'☕️'} keyword={'커피가 맛있어요'} />
          </div>
          <img
            className="h-90pxr w-90pxr"
            src="/images/review/test.png"
            alt="김밤비!!! 사진"
          />
        </div>
      </article>

      {/* 효진님이 주신 코드 이미지 아래 */}
      <article className="w-335pxr rounded-[15px] border border-greyscale-40 p-20pxr">
        <span className="mr-2 text-14pxr font-semibold text-additional-colors-dark">
          닉네임 넣을 곳
        </span>
        <img
          className="inline-block"
          src="/images/review/property-0.5.svg"
          alt="0.5점짜리 평점"
        />
        <p className="mb-1 mt-6pxr text-10pxr">24.03.06</p>
        <div className="flex">
          <div>
            <p className="mb-2 mr-6 min-h-54pxr min-w-180pxr text-12pxr">
              어머 여기 카페 너무 맛있고 분위기도 좋고 너무 좋아여!!! 어머 여기
              카페 너무 맛있고 분위기도 좋고 너무 좋아여!!! 어머 여기 카페 너무
              맛있고 분위기도 좋고 너무 좋아여!!! 어머 여기 카페 너무 맛있고
              분도 좋고 너무 좋아여!!! 어머 여기 카페 너무 맛있고 분도 좋고 너무
              좋아여!!! 어머 여기 카페 너무 맛있고 분도 좋고 너무 좋아여!!! 어머
              여기 카페 너무 맛있고 분도 좋고 너무 좋아여!!! 어머 여기 카페 너무
              맛있고 분
            </p>
            <Hashtag icon={'☕️'} keyword={'커피가 맛있어요'} />
            <img
              className="h-90pxr w-90pxr"
              src="/images/review/test.png"
              alt="김밤비!!! 사진"
            />
          </div>
        </div>
      </article>
    </div>
  );
}

export default ReviewList;
