// import RatingScore from '@/components/atoms/RatingScore/RatingScore';
// import { useUserIdStore } from '@/store/useLoginStore';
// import pb from '@/utils/pocketbase';
// import React from 'react';
// import { useRef } from 'react';
// import { useState } from 'react';

// function ReviewWrite() {
//   const reviewRef = useRef(null);

//   const { UserId } = useUserIdStore();

//   const [reviewText, setReviewText] = useState(''); // 초기값으로 0을 설정합니다.
//   const [image, setImage] = useState(null);
//   const [imageFile, setImageFile] = useState(null);
//   const [rating, setRating] = useState(5);
//   const [test, setTest] = useState(null);

//   const handleReviewCheck = (e) => {
//     e.preventDefault();
//     testRecord();
//   };

//   const formData = new FormData();
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];

//     let reader = new FileReader();

//     formData.append('image', file);
//     setTest(file);
//     setImageFile(URL.createObjectURL(file));

//     reader.onload = (e) => {
//       // setImage(e.target.result);
//       setImage(e.target.result);
//     };

//     reader.readAsDataURL(file);
//     console.log('이미지 테스트', imageTest);
//     console.log('이미지 테스트중', test);
//     // console.log(image);
//     // console.log('test', e.target.files[0].name);
//     // console.log('test2', e.target.result);
//   };

//   // let reviewText = reviewRef.current.value;

//   // test data 2개는 매개변수로
//   const data = {
//     cafeName: '1차 테스트',
//     email: UserId,
//     contents: reviewText,
//     hashtag: ['12ewjx70uf8so14'],
//     score: rating,
//     // image: ['/images/naver.svg'],
//   };

//   // pb에 데이터 전달 하는 함수
//   const testRecord = async () => {
//     await pb
//       .collection('review')
//       .create(data, {
//         files: formData,
//       })
//       .then(() => {
//         // console.log(image);
//         console.log('리뷰데이터', reviewText);
//         alert('전송 완료 ');
//       });
//   };

//   return (
//     <div>
//       <div className="w-500pxr">
//         <form
//           onSubmit={handleReviewCheck}
//           className="flex flex-col items-center gap-4 rounded-lg bg-white py-4"
//         >
//           <span className="text-lg font-semibold">리뷰 쓰기</span>
//           {/* <img src="/images/review/property-0.5.svg" alt="버튼" /> */}
//           <RatingScore rating={rating} setRating={setRating} />
//           <textarea
//             // type="text"
//             placeholder="구매하신 상품에 대해 리뷰를 남겨주세요"
//             ref={reviewRef}
//             className="h-300pxr w-300pxr overflow-auto rounded-md bg-slate-100"
//             // resize="vertical"
//             onChange={(e) => setReviewText(e.target.value)}
//           ></textarea>

//           <div className="flex flex-col items-center">
//             {/* <label>리뷰 이미지 넣기</label> */}
//             <input type="file" onChange={handleImageChange} />

//             {/* 이미지 미리보기 */}
//             {image && <img src={image} alt="테스트 이미지" />}
//           </div>

//           <button
//             type="submit"
//             className="w-300pxr rounded-md bg-black py-4 text-white"
//             // onClick={handleReviewCheck}
//           >
//             작성하기
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ReviewWrite;

import RatingScore from '@/components/atoms/RatingScore/RatingScore';
import { useUserIdStore } from '@/store/useLoginStore';
import pb from '@/utils/pocketbase';
import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

function ReviewWrite() {
  const reviewRef = useRef(null);
  const [rating, setRating] = useState(5);

  const { UserId } = useUserIdStore();

  const [reviewText, setReviewText] = useState(''); // 초기값으로 0을 설정합니다.
  const [imagePreview, setImagePreview] = useState(null); // 리뷰 작성 텍스트 영역의 이미지 미리보기
  const [imageFile, setImageFile] = useState(null); // 업로드할 이미지 파일

  const handleReviewCheck = (e) => {
    e.preventDefault();
    testRecord();
  };

  const formData = new FormData();
  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];

  //   // **파일 유효성 검사 추가 (선택사항)**

  //   const reader = new FileReader();

  //   reader.onload = (e) => {
  //     setImagePreview(e.target.result);
  //   };

  //   reader.readAsDataURL(file);

  //   formData.append('image', file);
  //   setImageFile(file);
  //   console.log(formData);
  // };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();

    // 이미지 업로드를 위한 formData에 파일 추가
    formData.append('image', file);
    console.log(formData); // formData 객체 확인

    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };

    reader.readAsDataURL(file); // 이미지 미리보기를 위해 데이터 URL 생성
  };

  const data = {
    cafeName: '1차 테스트',
    email: UserId,
    contents: reviewText,
    hashtag: ['12ewjx70uf8so14'],
    score: rating,
  };

  const testRecord = async () => {
    await pb
      .collection('review')
      .create(data, {
        files: formData,
      })
      .then(() => {
        console.log('리뷰데이터', reviewText);
        alert('전송 완료 ');
      });
  };

  return (
    <div>
      <div className="w-500pxr">
        <form
          onSubmit={handleReviewCheck}
          className="flex flex-col items-center gap-4 rounded-lg bg-white py-4"
        >
          <span className="text-lg font-semibold">리뷰 쓰기</span>
          <RatingScore rating={rating} setRating={setRating} />
          <textarea
            placeholder="구매하신 상품에 대해 리뷰를 남겨주세요"
            ref={reviewRef}
            className="h-300pxr w-300pxr overflow-auto rounded-md bg-slate-100"
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>

          <div className="flex flex-col items-center">
            <input type="file" multiple onChange={handleImageChange} />

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
