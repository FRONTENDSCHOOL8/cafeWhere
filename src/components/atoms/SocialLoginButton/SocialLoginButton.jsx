function SocialLoginButton() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-center gap-4">
        <button type="button">
          <img src="/kakao.svg" alt="카카오톡 로그인" />
        </button>
        <button type="button">
          <img src="/naver.svg" alt="네이버 로그인" />
        </button>
        <button type="button">
          <img src="/google.svg" alt="구글 로그인" />
        </button>
      </div>
    </div>
  );
}

export default SocialLoginButton;
