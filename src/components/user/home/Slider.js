import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../../../assets/images/slider/1.png";
import image2 from "../../../assets/images/slider/2.webp";
import image3 from "../../../assets/images/slider/3.png";
import image4 from "../../../assets/images/slider/4.webp";
import image5 from "../../../assets/images/slider/5.png";
import image6 from "../../../assets/images/slider/6.webp";
import image7 from "../../../assets/images/slider/7.webp";
import image8 from "../../../assets/images/slider/8.webp";
import { styled } from "@mui/material/styles";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./Slider.scss";

// import required modules
import { Scrollbar, Autoplay, Pagination, Navigation } from "swiper";

const Img = styled("div")(({ theme }) => ({
    
  }));

export default function App() {
  return (
    <>
      <Swiper
   spaceBetween={30}
   centeredSlides={true}
   autoplay={{
     delay: 4000,
     disableOnInteraction: false,
   }}
   pagination={{
     clickable: true,
   }}
   navigation={true}
   modules={[Autoplay, Pagination, Navigation]}
   className="mySwiper"
      >
          <SwiperSlide><img src={image7} /> </SwiperSlide>
        <SwiperSlide><img src={image1} /></SwiperSlide>
        <SwiperSlide><img src={image3} /></SwiperSlide>
        <SwiperSlide><img src={image2} /></SwiperSlide>
        <SwiperSlide><img src={image5} /> </SwiperSlide>
        <SwiperSlide><img src={image6} /> </SwiperSlide>
        <SwiperSlide><img src={image8} /> </SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
