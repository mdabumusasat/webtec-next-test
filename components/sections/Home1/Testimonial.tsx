"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import author1 from "@/public/images/resource/testi-author-1.png";
import author2 from "@/public/images/resource/testi-author-2.jpg";
import author3 from "@/public/images/resource/testi-author-3.jpg";
import testiImage from "@/public/images/resource/testi1-1.png";

const testimonials = [
  {
    name: "Cameron Williamson",
    role: "Business Owner",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    image: author1,
  },
  {
    name: "Anthony Malison",
    role: "Graphic Designer",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    image: author2,
  },
  {
    name: "Charles Charloth",
    role: "Brand Owner",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    image: author3,
  },
];

const TestimonialSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="testimonial-section">
      <div className="shape-8"></div>

      <div className="auto-container">
        <div className="row">
          {/* CONTENT COLUMN */}
          <div className="content-column col-xl-7 col-lg-6">
            <div className="inner-column mb-5 mb-sm-0">
              <div className="sec-title-h1">
                <h6 className="sub-title">Testimonials</h6>
                <h2 className="title char-animation">
                  What They’re Talking <br /> About Us?
                </h2>
              </div>

              <div className="outer-box">
                {/* SLIDER */}
                <Swiper
                  modules={[Navigation]}
                  slidesPerView={1}
                  loop
                  navigation={{
                    prevEl: ".swiper-button-prev",
                    nextEl: ".swiper-button-next",
                  }}
                  onBeforeInit={(swiper) => {
                    // @ts-ignore
                    swiper.params.navigation.prevEl = ".swiper-button-prev";
                    // @ts-ignore
                    swiper.params.navigation.nextEl = ".swiper-button-next";
                  }}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  onSlideChange={(swiper) =>
                    setActiveIndex(swiper.realIndex)
                  }
                  className="testi-swiper"
                >
                  {testimonials.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="testimonial-block">
                        <div className="inner-box">
                          <div className="icon-quote-3"></div>
                          <div className="text">{item.text}</div>
                          <div className="author-box">
                            <h4 className="name">
                              <Link href="/page-testimonial">
                                {item.name}
                              </Link>
                            </h4>
                            <div className="designation">{item.role}</div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* AUTHORS + NAV */}
                <div className="swiper-navs-box justify-content-xxl-between">
                  {/* AUTHORS */}
                  <div className="image-box">
                    {testimonials.map((item, index) => (
                      <div
                        key={index}
                        className={`author-image ${
                          activeIndex === index ? "active" : ""
                        }`}
                        onClick={() =>
                          swiperRef.current?.slideToLoop(index)
                        }
                        style={{ cursor: "pointer" }}
                      >
                        <Image src={item.image} alt={item.name} />
                        <div className="shape-6"></div>
                        <div className="shape-7"></div>
                      </div>
                    ))}
                  </div>

                  {/* NAV BUTTONS */}
                  <div className="nav-box">
                    <div className="swiper-button-prev">
                      <span className="icon fal fa-long-arrow-left"></span>
                    </div>
                    <div className="swiper-button-next">
                      <span className="icon fal fa-long-arrow-right"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE COLUMN */}
          <div className="image-column col-xl-5 col-lg-6">
            <div className="inner-column">
              <figure className="image bounce-x">
                <Image src={testiImage} alt="Testimonial" />
              </figure>
              <div className="icon-10 bounce-x"></div>
              <div className="icon-11 bounce-y"></div>
              <div className="icon-12 bounce-y"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
