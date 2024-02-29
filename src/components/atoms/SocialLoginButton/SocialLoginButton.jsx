import React from 'react';

function SocialLoginButton() {
  return (
    <div>
      <div className="flex flex-row items-center justify-center gap-[16px]">
        <img src="/kakao.svg" alt="카카오톡 로그인" />
        <img src="/naver.svg" alt="네이버 로그인" />
        <img src="/google.svg" alt="구글 로그인" />
      </div>
    </div>
  );
}

export default SocialLoginButton;