import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import homeBackGround from "../../../assets/images/logo/homeBackGround.webp";
import macbookpro2021 from "../../../assets/images/logo/macbookpro2021.png";
import ipad from "../../../assets/images/logo/ipad.jpg";
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
        <SwiperSlide><img src={ipad} /></SwiperSlide>
        <SwiperSlide><img src={homeBackGround} /></SwiperSlide>
        <SwiperSlide><img src={homeBackGround} /></SwiperSlide>
        <SwiperSlide><img src={macbookpro2021} /> </SwiperSlide>
        <SwiperSlide><img src={ipad} /> </SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
