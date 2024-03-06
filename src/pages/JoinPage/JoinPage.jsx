import { HeaderBar } from '@/components/atoms';
import { JoinInput } from '@/components/organisms';

function JoinPage() {
  return (
    <>
      <div className="h-full">
        <div className="mx-auto  min-w-375pxr max-w-680pxr">
          <HeaderBar name={'회원가입'} />
          <JoinInput />
        </div>
      </div>
    </>
  );
}

export default JoinPage;
