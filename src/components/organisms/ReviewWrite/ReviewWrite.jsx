import RatingScore from '@/components/atoms/RatingScore/RatingScore';
import { AllHashtagList } from '@/pages';
import { useHashtagStore } from '@/store';
import { useUserIdStore } from '@/store/useLoginStore';
import pb from '@/utils/pocketbase';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useCafeStore } from '@/store';

function ReviewWrite() {
  const reviewRef = useRef(null);
  const [rating, setRating] = useState(1);

  const UserId = JSON.parse(localStorage.getItem('pocketbase_auth')).model.id;

  const [reviewText, setReviewText] = useState(''); // 초기값으로 0을 설정합니다.
  const [imagePreview, setImagePreview] = useState(null); // 리뷰 작성 텍스트 영역의 이미지 미리보기

  // 효진님이 주신 소중한 코드
  const { hashtag } = useHashtagStore();

  const { cafe } = useCafeStore();

  const handleReviewCheck = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    // const data = {
    //   cafeName: cafe.cafeName,
    //   email: UserId,
    //   contents: reviewText,
    //   hashtag: hashtag,
    //   score: rating,
    // };

    formData.append('cafeName', cafe.cafeName);
    formData.append('users', UserId);
    formData.append('contents', reviewText);
    formData.append('hashtag', hashtag);
    formData.append('score', rating);

    const data = Object.fromEntries(formData.entries());
    // console.log(data);

    await pb
      .collection('review')
      .create(formData)
      .then(() => {
        alert('전송 완료');
        history.back(-2);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [imageList, setImageList] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const thumbnail = URL.createObjectURL(file);

    setImagePreview(thumbnail);
  };

  return (
    <div>
      <div className="w-500pxr">
        <AllHashtagList />
        <form
          onSubmit={handleReviewCheck}
          className="flex flex-col items-center gap-4 rounded-lg bg-white py-4"
          encType="multipart/form-data"
        >
          <span className="text-lg font-semibold">리뷰 쓰기</span>
          <RatingScore rating={rating} setRating={setRating} />
          <textarea
            placeholder="리뷰를 남겨주세요"
            ref={reviewRef}
            className="h-300pxr w-300pxr overflow-auto rounded-md bg-slate-100"
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>

          <div className="flex flex-col items-center">
            <input
              type="file"
              accept="*.jpg,*.png,*.jpeg,*.webp,*.avif,*.svg"
              multiple
              id="photos"
              name="image"
              onChange={handleImageChange}
            />

            {imagePreview && <img src={imagePreview} alt="테스트 이미지" />}
          </div>

          <button
            type="submit"
            className="w-300pxr rounded-md bg-black py-4 text-white"
          >
            작성하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default ReviewWrite;
