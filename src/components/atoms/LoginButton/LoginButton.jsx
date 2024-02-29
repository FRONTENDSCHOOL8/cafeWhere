import React from 'react';

function LoginButton() {
  return (
    <div>
      <div className="flex items-center justify-center">
        <button
          type="button"
          className="Button h-[48px] w-[327px] rounded-[11px] bg-[#654E3C] px-[16px] py-[12px] text-center text-[16px] text-white"
        >
          로그인
        </button>
      </div>
    </div>
  );
}

export default LoginButton;