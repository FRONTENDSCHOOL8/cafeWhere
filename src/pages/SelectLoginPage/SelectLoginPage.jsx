import { HeaderBar } from '@/components/atoms';
import Divider from '@/components/atoms/Divider/Divider';
import LoginButton from '@/components/atoms/LoginButton/LoginButton';
import SignUpLink from '@/components/atoms/SignUpLink/SignUpLink';
import SocialLoginButton from '@/components/atoms/SocialLoginButton/SocialLoginButton';
import { useNavigate } from 'react-router-dom';

function SelectLoginPage() {
  const navigate = useNavigate();

  const handleLoginPage = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <div className="flex h-full min-h-svh flex-col justify-center">
      <HeaderBar showHomeBtn />
      <div className="my-auto flex w-full flex-col  ">
        <div className="flex justify-center ">
          <img
            className="pb-10"
            src="/images/biglogo2.svg"
            alt="카페어디 빅사이즈 로고"
          />
        </div>

        <div className="flex flex-col">
          <div onClick={handleLoginPage} className="mx-5">
            <LoginButton>로그인</LoginButton>
          </div>
          <Divider />
          <SocialLoginButton />
          <SignUpLink />
        </div>
      </div>
    </div>
  );
}

export default SelectLoginPage;
