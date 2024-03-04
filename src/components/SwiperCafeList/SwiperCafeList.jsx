import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import CategoryCafeList from './CategoryCafeList';

function SwiperCafeList() {
  return (
    <>
      <Swiper
        className="mySwiper min-w-375pxr max-w-680pxr"
        slidesPerView={1.5}
        breakpoints={{
          375: {
            slidesPerView: 1.5,
            spaceBetween: 16,
          },
          425: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          680: {
            slidesPerView: 3,
            spaceBetween: 16,
          },
        }}
        navigation={true}
        modules={[Navigation, FreeMode, Pagination]}
      >
        <SwiperSlide>
          <CategoryCafeList />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCafeList />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCafeList />
        </SwiperSlide>
        <SwiperSlide>
          <CategoryCafeList />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default SwiperCafeList;
