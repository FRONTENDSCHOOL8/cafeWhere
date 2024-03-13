import { HeaderBar } from '@/components/atoms';
import SignUpLink from '@/components/atoms/SignUpLink/SignUpLink';
import { LoginInput } from '@/components/organisms';

function LoginPage() {
  return (
    <div className="h-full min-h-svh pb-8">
      <HeaderBar name={'로그인'} showHomeBtn />
      <div className="flex justify-center pt-4">
        <img src="/images/LoginLogo.svg" alt="여기어때 로고" />
      </div>
      <LoginInput />
      <SignUpLink />
    </div>
  );
}

export default LoginPage;
