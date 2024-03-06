import { HeaderBar } from '@/components/atoms';
import LoginButton from '@/components/atoms/LoginButton/LoginButton';
import { JoinInput } from '@/components/organisms';
import CheckBox from '@/components/organisms/CheckBox/JoinInputCheckBox';

function JoinPage() {
  return (
    <>
      <div className="h-screen">
        <div className="mx-auto h-full min-w-375pxr max-w-680pxr bg-white">
          <HeaderBar name={'회원가입'} />
          <JoinInput />
        </div>
      </div>
    </>
  );
}

export default JoinPage;
