import { HeaderBar } from '@/components/atoms';
import SignUpLink from '@/components/atoms/SignUpZone/SignUpZone';
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
            <SignUpLink />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
