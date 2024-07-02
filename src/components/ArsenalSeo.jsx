import React from "react";
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import untitled42 from "../assets/icons/untitled42.png";
import Untitled43 from "../assets/icons/Untitled43.png";
import Untitled44 from "../assets/icons/Untitled44.png";
import Untitled45 from "../assets/icons/Untitled45.png";
import Untitled46 from "../assets/icons/Untitled46.png";

SwiperCore.use([Navigation, Pagination]);
const ArsenalSeo = () => {
    return (
        <div id="slide" data-aos="zoom-in" className="section">
            <h2>Our SEO Tools</h2>
            <Swiper
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
            <div className="one-column">
                <img src={untitled42} />
                <img src={Untitled43} />
                <img src={Untitled44} />
                <img src={Untitled45} />
                <img src={Untitled46} />
            </div>
        </div>
    );
};

export default ArsenalSeo;




/*

import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination]);

function MySwiper() {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
}

export default MySwiper;

*/