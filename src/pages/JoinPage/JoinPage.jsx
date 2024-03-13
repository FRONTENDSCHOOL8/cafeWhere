import { HeaderBar } from '@/components/atoms';
import { JoinInput } from '@/components/organisms';

function JoinPage() {
  return (
    <div className="h-full">
      <HeaderBar name={'회원가입'} />
      <JoinInput />
    </div>
  );
}

export default JoinPage;
