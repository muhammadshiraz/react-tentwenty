import React from 'react';
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { register } from 'swiper/element/bundle';
import Slide01 from "../../assets/images/hero/slide-01.jpg";
register();

export const Hero = () => {
  const swiperElRef = React.useRef(null);
  

  return (
    <div className="hero">
      <swiper-container
        modules={[Autoplay, Pagination, Navigation]}
        ref={swiperElRef}
        slides-per-view="1"
        navigation="false"
        pagination="false"
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
      >
        <swiper-slide><img src={Slide01} alt="From our Farms to your hands" /></swiper-slide>
        <swiper-slide><img src={Slide01} alt="From our Farms to your hands" /></swiper-slide>
        <swiper-slide><img src={Slide01} alt="From our Farms to your hands" /></swiper-slide>
      </swiper-container>

      <div className="hero-text flex flex-col justify-center items-start">
        <p>Welcome To TenTwenty Farms</p>
        <h1>From our Farms <br /> to your hands</h1>
      </div>

        
    </div>
  );
};

export default Hero;
