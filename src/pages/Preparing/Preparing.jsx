import HeaderBar from '@/components/atoms/HeaderBar/HeaderBar';
import PreparingItem from '@/components/PreparingItem/PreparingItem';

function Preparing() {
  return (
    <div className="h-screen">
      {/* <div className="flex flex-col items-center justify-center"> */}
      <div className="mx-auto h-full w-full min-w-375pxr max-w-680pxr">
        <HeaderBar name={'돌아가기'} showHomeBtn={false} />
        <PreparingItem />
      </div>
    </div>
  );
}

export default Preparing;
