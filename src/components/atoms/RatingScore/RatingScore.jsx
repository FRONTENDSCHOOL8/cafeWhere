import { useState } from 'react';
function RatingScore({ rating, setRating }) {
  // const [rating, setRating] = useState(5);
  return (
    <div>
      <div className="text-center font-semibold"> 별점 {rating}</div>
      {/* <div> 
        {[...Array(rating)].map((a, i) => (
        // <PiStarFill className="star-lg" key={i} onClick={() => setRating(i + 1)} />
        <img className="star-lg" key={i} onClick={() => setRating(i + 1)} />
      ))}
        {[...Array(5 - rating)].map((a, i) => (
        <PiStarLight className="star-lg" key={i} onClick={() => setRating(rating + i + 1)} />
      ))}</div> */}

      <div className="flex">
        {[...Array(5)].map((_, i) =>
          i < rating ? (
            <img
              src="/images/coffeepull1.svg"
              alt="filled coffee"
              className="h-6 w-6 cursor-pointer" // 테일윈드 클래스를 사용하여 크기 및 포인터 스타일 적용
              key={i}
              onClick={() => {
                setRating(i + 1);
              }}
            />
          ) : (
            <img
              src="/images/coffeepull2.svg"
              alt="empty coffee"
              className="h-6 w-6 cursor-pointer"
              key={i}
              onClick={() => {
                setRating(i + 1);
              }}
            />
          )
        )}
      </div>
    </div>
  );
}

export default RatingScore;
