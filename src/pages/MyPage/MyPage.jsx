import { HeaderBar } from '@/components/atoms';
import React from 'react';
import { useEffect } from 'react';
import LoginPage from '../LoginPage/LoginPage';
import { useNavigate } from 'react-router-dom';
import SelectLoginPage from '../SelectLoginPage/SelectLoginPage';

function MyPage() {
  const loginCheck = sessionStorage.getItem('token');

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    alert('로그아웃 되었습니다');
    navigate('/');
  };

  return (
    <div>
      {loginCheck ? (
        <div className="h-screen">
          <div className=" mx-auto h-full min-w-320pxr max-w-620pxr bg-white">
            <HeaderBar name={'프로필'} showHomeBtn={true} />
            <img
              src="/images/mypageicon.svg"
              alt="마이페이지 이미지"
              className="mx-auto mt-24"
            />

            <div className="mt-8 text-center text-20pxr font-bold">깐부</div>

            <div className="mt-10 flex justify-center gap-4">
              <div>리뷰 17</div>
              <div className="h-7 w-1pxr bg-[#d9d9d9]"></div>
              <div>찜목록 19</div>
              <div className="h-7 w-1pxr bg-[#d9d9d9]"></div>
              <div>쿠폰 0</div>
            </div>

            <div className="mt-24 flex flex-col">
              <div className="mx-5 flex cursor-pointer items-center justify-between border-b border-[#D4D6DD] p-4">
                <span>내 계정</span>
                <img
                  src="/images/main/swiper/rightArrow.svg"
                  alt="내 계정으로 이동"
                />
              </div>

              <div className="mx-5 flex cursor-pointer items-center justify-between border-b border-[#D4D6DD] p-4">
                <span>비밀번호 변경</span>
                <img
                  src="/images/main/swiper/rightArrow.svg"
                  alt="비밀번호 변경으로 이동"
                />
              </div>

              <div className="mx-5 flex cursor-pointer items-center justify-between border-b border-[#D4D6DD] p-4">
                <span>리뷰관리</span>
                <img
                  src="/images/main/swiper/rightArrow.svg"
                  alt="리뷰관리로 이동"
                />
              </div>

              <div className="mx-5 flex cursor-pointer items-center justify-between border-b border-[#D4D6DD] p-4">
                <span>찜 목록</span>
                <img
                  src="/images/main/swiper/rightArrow.svg"
                  alt="찜 목록으로 이동"
                />
              </div>

              <div className="mx-5 flex cursor-pointer items-center justify-between border-b border-[#D4D6DD] p-4">
                <span>공지사항</span>
                <img
                  src="/images/main/swiper/rightArrow.svg"
                  alt="공지사항으로 이동"
                />
              </div>

              <div className="mx-5 flex cursor-pointer items-center justify-between border-b border-[#D4D6DD] p-4">
                <span>설정</span>
                <img
                  src="/images/main/swiper/rightArrow.svg"
                  alt="설정으로 이동"
                />
              </div>

              <div
                className="mx-5 flex cursor-pointer items-center justify-between border-b border-[#D4D6DD] p-4"
                onClick={handleLogout}
              >
                <span>로그아웃</span>
                <img src="/images/main/swiper/rightArrow.svg" alt="로그아웃" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SelectLoginPage />
      )}
    </div>
  );
}

export default MyPage;
