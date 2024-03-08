function NoResult() {
  return (
    <div className="relative">
      <div className="flex h-screen flex-col items-center justify-center">
        <img src="/cup.png" alt="빈 컵" />
        <p className="">검색 결과가 없습니다.</p>
      </div>
    </div>
  );
}

export default NoResult;
