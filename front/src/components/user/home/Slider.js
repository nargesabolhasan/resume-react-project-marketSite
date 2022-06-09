import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
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

const Img = styled("img")(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "100%",
    objectPosition: "top start",
    objectFit:"cover"
  },
  [theme.breakpoints.up("md")]: {
    width: "100%",
  },
  [theme.breakpoints.up("lg")]: {
    width: "100%",
  },
}));

export default function App() {
  return (
    < >
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
   sx={{height:" 100%"}}
      >
          <SwiperSlide><Img src={image7} /> </SwiperSlide>
        <SwiperSlide><Img src={image1} /></SwiperSlide>
        <SwiperSlide><Img src={image3} /></SwiperSlide>
        <SwiperSlide><Img src={image2} /></SwiperSlide>
        <SwiperSlide><Img src={image5} /> </SwiperSlide>
        <SwiperSlide><Img src={image6} /> </SwiperSlide>
        <SwiperSlide><Img src={image8} /> </SwiperSlide>
      </Swiper>
    </>
  );
}
