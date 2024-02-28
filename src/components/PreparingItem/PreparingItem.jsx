import React from 'react';

function PreparingItem() {
  return (
    <div>
      <div className="flex h-812pxr min-w-375pxr max-w-680pxr flex-col items-center justify-center gap-4">
        <img
          src="/images/preparing/preparingImg.png"
          alt="비어있습니다"
          className="max-w-123pxr"
        />
        <div className="flex flex-col items-center">
          <h1>
            <strong>앗! 아직 개발중인 기능이에요</strong>
          </h1>
          <br />
          <span>빠르게 기능을 선보이도록 할게요</span>
          <span>조금만 더 기달려주세요 💦</span>
        </div>
      </div>
    </div>
  );
}

export default PreparingItem;
