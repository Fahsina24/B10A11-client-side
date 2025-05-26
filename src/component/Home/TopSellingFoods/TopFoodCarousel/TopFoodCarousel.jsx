// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import TopSellingSlide from "../TopSellingSlide/TopSellingSlide";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";

const TopFoodCarousel = ({ allTopFoods }) => {
  const { _id, foodName, foodImage, price } = allTopFoods;
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
      >
        {allTopFoods.map((slide, index) => (
          <SwiperSlide key={index}>
            <TopSellingSlide slide={slide}></TopSellingSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopFoodCarousel;
