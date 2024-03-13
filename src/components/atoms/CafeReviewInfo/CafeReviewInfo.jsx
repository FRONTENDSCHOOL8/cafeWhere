function CafeReviewInfo({ data }) {
  return (
    <p className="my-2 flex gap-2 text-13pxr">
      <span>☕ {data.score}</span>
      <span>리뷰 {data.reviewQuantity}</span>
    </p>
  );
}

export default CafeReviewInfo;
