import React from 'react';

function MainHeader() {
  return (
    <div>
      <div className="flex flex-col ">
        <div className="ml-5 mr-5 mt-5 flex min-w-375pxr max-w-680pxr items-center justify-between ">
          <button type="button" className="">
            <img src="/images/main/header/mapLogo.svg" alt="지도로 이동" />
          </button>

          <button type="button" className="">
            <img src="/images/main/header/mainLogo.svg" alt="메인 로고" />
          </button>

          <button type="button" className="">
            <img
              src="/images/main/header/searchIcon.svg"
              alt="검색창으로 이동"
            />
          </button>
        </div>
        <div className="flex items-center">
          <span>서울시 종로구</span>
          <button className="">
            <img src="/images/main/header/arrow-down.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainHeader;
