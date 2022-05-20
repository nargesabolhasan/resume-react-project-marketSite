// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// // import Slide from "react-swipeable-views";
// import Button from "@material-ui/core/Button";
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import { red, blue, green } from "@material-ui/core/colors";
// import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";

// const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile }) => {
//   return (
//     <div>
//       <AutoRotatingCarousel
//         label="Get started"
//         open={handleOpen.open}
//         onClose={() => setHandleOpen({ open: false })}
//         onStart={() => setHandleOpen({ open: false })}
//         autoplay={true}
//       >
//         <Slide
//           media={
//             <img src="http://www.icons101.com/icon_png/size_256/id_79394/youtube.png" />
//           }
//           mediaBackgroundStyle={{ backgroundColor: red[400] }}
//           style={{ backgroundColor: red[600] }}
//           title="This is a very cool feature"
//           subtitle="Just using this will blow your mind."
//         />
//         <Slide
//           media={
//             <img src="http://www.icons101.com/icon_png/size_256/id_80975/GoogleInbox.png" />
//           }
//           mediaBackgroundStyle={{ backgroundColor: blue[400] }}
//           style={{ backgroundColor: blue[600] }}
//           title="Ever wanted to be popular?"
//           subtitle="Well just mix two colors and your are good to go!"
//         />
//         <Slide
//           media={
//             <img src="http://www.icons101.com/icon_png/size_256/id_76704/Google_Settings.png" />
//           }
//           mediaBackgroundStyle={{ backgroundColor: green[400] }}
//           style={{ backgroundColor: green[600] }}
//           title="May the force be with you"
//           subtitle="The Force is a metaphysical and ubiquitous power in the Star Wars fictional universe."
//         />
//       </AutoRotatingCarousel>
//     </div>
//   );
// };

// export default AutoRotatingCarouselModal
//------------------------------------------------------

// import React from 'react';
// import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'

// function Example(props)
// {
//     var items = [
//         {
//             name: "Random Name #1",
//             description: "Probably the most random thing you have ever seen!"
//         },
//         {
//             name: "Random Name #2",
//             description: "Hello World!"
//         }
//     ]

//     return (
//         <Carousel>
//             {
//                 items.map( (item, i) => <Item key={i} item={item} /> )
//             }
//         </Carousel>
//     )
// }

// function Item(props)
// {
//     return (
//         <div>
//             <h2>{props.item.name}</h2>
//             <p>{props.item.description}</p>

//             <Button className="CheckButton">
//                 Check it out!
//             </Button>
//         </div>
//     )
// }

// export default Example

//-----------------
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import "./Slider.scss";

// import required modules
import { Scrollbar } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        scrollbar={{
          hide: true,
        }}
        modules={[Scrollbar]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
