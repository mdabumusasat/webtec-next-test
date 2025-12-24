"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// Logos
import logo1 from "@/public/images/icons/claint-h1-1.png";
import logo2 from "@/public/images/icons/claint-h1-2.png";
import logo3 from "@/public/images/icons/claint-h1-3.png";
import logo4 from "@/public/images/icons/claint-h1-4.png";
import logo5 from "@/public/images/icons/claint-h1-5.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
];

const ClientSection = () => {
  return (
    <section className="claint-section-h1">
        <div className="auto-container">
            <div className="sec-title text-center">
                <h6 className="sub-title char-animation">1K+ Brands Trust Us</h6>
            </div>
            <Swiper
            modules={[Autoplay]}
            loop
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            speed={800}
            spaceBetween={30}
            breakpoints={{
                320: { slidesPerView: 2 },
                576: { slidesPerView: 3 },
                768: { slidesPerView: 4 },
                992: { slidesPerView: 5 },
            }}
            className="claint-swiper">
            {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                <div className="logo">
                    <Image src={logo} alt="Client Logo" />
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    </section>
  );
};

export default ClientSection;
