import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function HeaderSwiper() {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [swiper, setSwiper] = useState(); // 슬라이드용

  const handlePrev = () => {
    swiper?.slidePrev();
  };

  const handleNext = () => {
    swiper?.slideNext();
  };

  return (
    <div className="relative">
      <Swiper
        className="swiper1 h-190pxr min-w-375pxr max-w-680pxr bg-slate-500 "
        slidesPerView={1}
        modules={[Pagination, Navigation, Autoplay]}
        navigation={{
          nextEl: '.next-slide-button',
          prevEl: '.prev-slide-button',
        }}
        pagination={{
          clickable: true,
          bulletClass: 'bg-gray-500 rounded-full text-white',
        }}
        autoplay={{ delay: 5000 }}
        loop={true}
        onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
        onSwiper={(e) => {
          setSwiper(e);
        }}
      >
        <SwiperSlide>
          <img src="/images/main/swiper/swiperBigImg.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/main/swiper/swiperBigImg2.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/main/swiper/swiperBigImg3.svg" alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="prev-slide-button absolute left-20pxr top-75pxr z-10 rounded-full bg-slate-400">
        <img src="/images/main/swiper/leftArrow.svg" alt="" />
      </div>
      <div className="next-slide-button absolute right-20pxr top-75pxr z-10 rounded-full bg-slate-400">
        <img src="/images/main/swiper/rightArrow.svg" alt="" />
      </div>
      <div className=" absolute right-20pxr top-160pxr z-10 h-19pxr w-50pxr  items-center rounded-xl  bg-gray-700 text-center text-white">
        <span>{swiperIndex + 1}</span>
        <span>{'/'}</span>
        <span>{3}</span>
      </div>
      {/* <div>
        <button
          onClick={handlePrev}
          className=" absolute left-200pxr top-20 rounded-full bg-slate-400 "
        >
          <img src="/images/main/swiper/leftArrow.svg" alt="" />
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-200pxr top-20 rounded-full bg-slate-400"
        >
          <img src="/images/main/swiper/rightArrow.svg" alt="" />
        </button>
      </div> */}
    </div>
  );
}

export default HeaderSwiper;
