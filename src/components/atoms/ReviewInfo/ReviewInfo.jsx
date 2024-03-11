function ReviewInfo() {
  const handleReview = (e) => {
    console.log(e.taget);
  };

  return (
    <div>
      <div className="flex flex-col bg-lime-300 ">
        <span>리뷰창</span>
        <input
          type="text"
          placeholder="리뷰를 입력하세요"
          className="w-auto"
          onChange={handleReview}
        ></input>
      </div>
    </div>
  );
}

export default ReviewInfo;
