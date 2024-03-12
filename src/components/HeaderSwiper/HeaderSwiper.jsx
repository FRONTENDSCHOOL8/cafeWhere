import { useState } from 'react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function HeaderSwiper() {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [swiper, setSwiper] = useState(); // 슬라이드용

  return (
    <div className="relative">
      <Swiper
        className="swiper1 min-w-375pxr max-w-680pxr"
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
        autoplay={{ delay: 7000 }}
        loop={true}
        onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
        onSwiper={(e) => {
          setSwiper(e);
        }}
      >
        <SwiperSlide className="h-full">
          <img src="/images/main/swiper/swipermainimage1.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <img src="/images/main/swiper/swipermainimage2.svg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <img src="/images/main/swiper/swipermainimage3.svg" alt="" />
        </SwiperSlide>
      </Swiper>
      <div className="prev-slide-button absolute left-20pxr top-125pxr z-10 rounded-full bg-slate-200/60">
        <img src="/images/main/swiper/leftArrow.svg" alt="" />
      </div>
      <div className="next-slide-button absolute right-20pxr top-125pxr z-10 rounded-full bg-slate-200/60">
        <img src="/images/main/swiper/rightArrow.svg" alt="" />
      </div>
      <div className=" absolute bottom-3 right-20pxr z-10 flex h-20pxr w-50pxr items-center justify-center rounded-xl bg-gray-500/60 text-center text-white">
        <span>{swiperIndex + 1}</span>
        <span>{'/'}</span>
        <span>{3}</span>
      </div>
    </div>
  );
}

export default HeaderSwiper;
