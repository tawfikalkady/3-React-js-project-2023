import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

//import images
import slide1 from "../../assets/home/slide1.jpg";
import slide2 from "../../assets/home/slide2.jpg";
import slide3 from "../../assets/home/slide3.jpg";
import slide4 from "../../assets/home/slide4.jpg";
import slide5 from "../../assets/home/slide5.jpg";
import slide6 from "../../assets/home/slide6.jpg";
import slide7 from "../../assets/home/slide7.jpg";
import slide8 from "../../assets/home/slide8.jpg";
import slide9 from "../../assets/home/slide9.jpg";

import SectionTitle from "./SectionTitle";

const Category = () => {
  return (
    <div className="w-5/6 mx-auto my-5">
        <SectionTitle subheading='from 11:00am to 10:00pm' heading='order online'/>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={slide1} alt=""/>
            <h3 className="text-x1 uppercase text-center -mt-12 font-bold text-white">Sameh</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt=""/>
            <h3 className="text-x1 uppercase text-center -mt-12 font-bold text-white">tawfik</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt=""/>
            <h3 className="text-x1 uppercase text-center -mt-12 font-bold text-white">mohamed</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt=""/>
            <h3 className="text-x1 uppercase text-center -mt-12 font-bold text-white">hassan</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt=""/>
            <h3 className="text-x1 uppercase text-center -mt-12 font-bold text-white">hamed</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide6} alt=""/>
            <h3 className="text-x1 uppercase text-center -mt-12 font-bold text-white">kasem</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide7} alt=""/>
            <h3 className="text-x1 uppercase text-center -mt-12 font-bold text-white">memo</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide8} alt=""/>
            <h3 className="text-x1 uppercase text-center -mt-12 font-bold text-white">john</h3>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide9} alt=""/>
            <h3 className="text-x1 uppercase text-center -mt-12 font-bold text-white">jones</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
