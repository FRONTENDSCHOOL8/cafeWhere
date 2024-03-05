import HeaderSwiper from '@/components/HeaderSwiper/HeaderSwiper';
import { MainHeader } from '@/components/atoms';

function MainPage() {
  return (
    <div>
      <div className="h-screen ">
        <div className="mx-auto h-full w-full min-w-375pxr max-w-680pxr bg-white">
          <MainHeader />

          <HeaderSwiper />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
