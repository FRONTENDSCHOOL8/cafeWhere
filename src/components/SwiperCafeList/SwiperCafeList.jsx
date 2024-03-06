import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import CategoryCafeList from './CategoryCafeList';

function SwiperCafeList() {
  return (
    <div className="min-w-375pxr max-w-680pxr">
      {/* CategoryListName을 어디다 넣어야 할지는 페이지 만들때 고민 */}
      <Swiper
        className="mySwiper"
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
        modules={[FreeMode, Pagination]}
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
    </div>
  );
}

export default SwiperCafeList;
