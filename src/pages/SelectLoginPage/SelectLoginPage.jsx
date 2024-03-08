import { Wish } from '@/components/atoms';
import Divider from '@/components/atoms/Divider/Divider';
import LoginButton from '@/components/atoms/LoginButton/LoginButton';
import SignUpLink from '@/components/atoms/SignUpLink/SignUpLink';
import SocialLoginButton from '@/components/atoms/SocialLoginButton/SocialLoginButton';
import { useNavigate } from 'react-router-dom';

function SelectLoginPage() {
  let navigate = useNavigate();

  const handleLoginPage = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  return (
    <>
      <div className="h-screen">
        <div className="mx-auto flex h-full w-full min-w-375pxr max-w-680pxr flex-col">
          <div className="mb-44pxr mt-197pxr flex justify-center pt-10">
            <img src="/images/biglogo2.svg" alt="카페어디 빅사이즈 로고" />
          </div>

          <div className="flex flex-col gap-4">
            <div onClick={handleLoginPage} className="mx-20pxr">
              <LoginButton>로그인</LoginButton>
            </div>
            <Divider />
            <SocialLoginButton />
            <SignUpLink />
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectLoginPage;
