import React from 'react';

function MainHeader() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex min-w-375pxr max-w-680pxr items-center justify-around py-4">
          <button type="button" className="gap-10pxr">
            <img src="/images/main/header/mapLogo.svg" alt="지도로 이동" />
          </button>

          <button type="button" className="gap-10pxr">
            <img src="/images/main/header/mainLogo.svg" alt="메인 로고" />
          </button>

          <button type="button" className="gap-10pxr">
            <img
              src="/images/main/header/searchIcon.svg"
              alt="검색창으로 이동"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
