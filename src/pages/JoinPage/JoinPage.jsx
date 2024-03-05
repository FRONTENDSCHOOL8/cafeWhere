import { HeaderBar } from '@/components/atoms';
import LoginButton from '@/components/atoms/LoginButton/LoginButton';
import { JoinInput } from '@/components/organisms';
import CheckBox from '@/components/organisms/CheckBox/JoinInputCheckBox';

function JoinPage() {
  return (
    <>
      <div className="h-screen">
        <div className="mx-auto h-full min-w-320pxr max-w-620pxr bg-white">
          <HeaderBar name={'회원가입'} />
          <JoinInput />
          <CheckBox />
          <div className="mx-4 mt-20">
            <LoginButton>회원 가입</LoginButton>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinPage;
