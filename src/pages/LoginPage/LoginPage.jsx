import { HeaderBar } from '@/components/atoms';
import Divider from '@/components/atoms/Divider/Divider';
import LoginButton from '@/components/atoms/LoginButton/LoginButton';
import SignUpLink from '@/components/atoms/SignUpLink/SignUpLink';
import SocialLoginButton from '@/components/atoms/SocialLoginButton/SocialLoginButton';
import { LoginInput } from '@/components/organisms';

function LoginPage() {
  return (
    <>
      <div className="h-screen">
        <div className="mx-auto h-full w-full min-w-375pxr max-w-680pxr ">
          <HeaderBar name={'로그인'} />
          <div className="flex justify-center pt-10">
            <img src="/images/LoginLogo.svg" alt="여기어때 로고" />
          </div>
          <LoginInput />
          <div className="flex flex-col gap-83pxr">
            {/* <LoginButton /> */}
            <SignUpLink />
          </div>
          {/* <SocialLoginButton /> */}
        </div>
      </div>
    </>
  );
}

export default LoginPage;
