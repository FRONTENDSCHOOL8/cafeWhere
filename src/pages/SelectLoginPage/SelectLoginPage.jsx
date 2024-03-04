import { Wish } from '@/components/atoms';
import Divider from '@/components/atoms/Divider/Divider';
import LoginButton from '@/components/atoms/LoginButton/LoginButton';
import SignUpLink from '@/components/atoms/SIgnUpLink/SignUpLink';
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
        <div className="mx-auto  flex h-full w-full min-w-320pxr max-w-620pxr flex-col bg-white">
          <div className="mb-43pxr mt-197pxr flex justify-center pt-10">
            <img src="/images/biglogo2.svg"></img>
          </div>

          <div className="flex flex-col gap-4">
            <div onClick={handleLoginPage} className="mx-20pxr">
              <LoginButton />
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
