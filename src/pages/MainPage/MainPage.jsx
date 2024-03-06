import HeaderSwiper from '@/components/HeaderSwiper/HeaderSwiper';
import { MainHeader } from '@/components/atoms';
import { useState } from 'react';

function MainPage() {
  const [region, setRegion] = useState('종로구');

  return (
    <div>
      <div className="h-screen ">
        <div className="mx-auto h-full w-full min-w-320pxr max-w-620pxr bg-white">
          <MainHeader region={region} setRegion={setRegion} />

          <HeaderSwiper />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
