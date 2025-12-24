"use client";

import { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const services = [
  {
    title: "Website Design \(UI/UX)",
    image: "/images/service/service-2-1.jpg",
  },
  {
    title: "Corporate/Portfolio \Websites",
    image: "/images/service/service-2-2.jpg",
  },
  {
    title: "Maintenance & \Support",
    image: "/images/service/service-2-3.jpg",
  },
  {
    title: "Branding & \Creative Design",
    image: "/images/service/service-2-4.jpg",
  },
  {
    title: "Website Design \(UI/UX)",
    image: "/images/service/service-2-1.jpg",
  },
  {
    title: "Corporate/Portfolio \Websites",
    image: "/images/service/service-2-2.jpg",
  },
  
];

const KsServiceSectionH3 = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  return (
    <div className="ks-service-area ks-service-style-2">
      <div className="outer-box">
        <div className="sec-title-h1 text-center">
          <h6 className="sub-title">Our services</h6>
          <h2 className="title">
            Empower Your Business With <br />
            Innovative Digital Services
          </h2>
        </div>
        <div
          className="blog-slide-wrapper"
          data-aos="fade-up"
          data-aos-delay="200">
          <Swiper
            className="service-active-h3"
            modules={[Autoplay]}
            loop
            spaceBetween={30}
            autoplay={{ delay: 4000 }}
            onSwiper={() => AOS.refresh()}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 4 },
            }}>
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="ks-service-item" data-aos="fade-up">
                  <h4 className="ks-service-title">
                    <Link className="border-line" href="/page-service-details">
                      {service.title.split("\n").map((line, i) => (
                        <span key={i}>
                          {line}
                          <br />
                        </span>
                      ))}
                    </Link>
                  </h4>
                  <div className="ks-service-thumb">
                    <img src={service.image} alt="Service" />
                  </div>
                  <div className="ks-service-list-box">
                    <ul>
                      <li>Website Maintenance & Updates</li>
                      <li>Performance Optimization</li>
                      <li>Security Monitoring</li>
                      <li>Backup & Recovery</li>
                    </ul>
                  </div>
                  <Link href="/page-service-details" className="ks-service-more">
                    More
                  </Link>
                  <div className="ks-service-link">
                    <Link href="/page-service-details">
                      <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.90207 14.025V8.295H0.17207V6.09H5.90207V0.374999H8.10707V6.09H13.8221V8.295H8.10707V14.025H5.90207Z" fill="currentcolor" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default KsServiceSectionH3;
