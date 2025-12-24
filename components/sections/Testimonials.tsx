"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";

const TestimonialSection = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <section className="ks-testimonial-area pt-100">
        <div className="container container-1250">
            <div className="ks-testimonial-wrap">
                <div className="ks-testimonial-item d-flex">
                    <img
                    className="ks-testimonial-shape-1"
                    src="/images/icons/testimonial-1-1.png"
                    alt=""
                    />
                    <Swiper
                    modules={[Navigation, Thumbs]}
                    navigation={{
                        nextEl: ".arrow-next",
                        prevEl: ".arrow-prev",
                    }}
                    thumbs={{ swiper: thumbsSwiper }}
                    className="ks-testimonial-active">
                    {[1, 2].map((item) => (
                        <SwiperSlide key={item}>
                        <div className="ks-testimonial-content">
                            <span className="quote d-block">
                            <svg width="60" height="60" viewBox="0 0 83 59">
                                <path
                                d="M0.01 35.14H17.58L5.87 58.57H23.44L35.15 35.14V0H0.01V35.14Z"
                                fill="#FF3838"
                                />
                                <path
                                d="M46.87 0V35.14H64.44L52.73 58.57H70.3L82.01 35.14V0H46.87Z"
                                fill="#FF3838"
                                />
                            </svg>
                            </span>
                            <div className="ratting">
                            {[...Array(5)].map((_, i) => (
                                <i key={i}>
                                <svg width="18" height="18" viewBox="0 0 18 18">
                                    <path
                                    d="M17.71 7.59L13.85 11.39L14.77 16.75C14.81 16.98 14.71 17.22 14.52 17.36C14.31 17.52 14.04 17.5 13.87 17.41L9.09 14.88L4.32 17.41C4.11 17.52 3.85 17.5 3.66 17.36C3.47 17.22 3.38 16.98 3.42 16.75L4.33 11.39L0.47 7.59C0.3 7.43 0.24 7.18 0.31 6.95C0.38 6.73 0.58 6.56 0.81 6.53L6.15 5.75L8.54 0.87C8.74 0.44 9.44 0.44 9.65 0.87L12.03 5.75L17.37 6.53C17.61 6.56 17.8 6.73 17.87 6.95C17.95 7.18 17.88 7.43 17.71 7.59Z"
                                    fill="#FF3838"
                                    />
                                </svg>
                                </i>
                            ))}
                            </div>
                            <p>
                            I recently worked with dixom for my home renovation
                            project, and I couldn't be happier with the results.
                            From the moment I walked into their showroom, I was
                            impressed by the extensive selection of high-quality.
                            </p>
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
                    <div className="ks-testimonial-thumb">
                    <img src="/images/resource/thumb-1-1.jpg" alt="" />
                    <div className="ks-testimonial-thumb-sm">
                        <img src="/images/resource/thumb-1-2.jpg" alt="" />
                    </div>
                    </div>
                </div>
                <div className="ks-testimonial-bottom">
                    <div className="row align-items-center">
                    <div className="col-xl-5 col-lg-6 col-md-6 col-sm-6">
                        <Swiper
                            modules={[Thumbs]}
                            onSwiper={setThumbsSwiper}
                            slidesPerView={1}
                            watchSlidesProgress
                            className="ks-testi-author-active">
                            <SwiperSlide>
                                <div className="ks-testimonial-user-wrap d-flex align-items-center">
                                <div className="thumb">
                                    <img src="/images/resource/testi-h2-1.jpg" alt="" />
                                </div>
                                <div className="ks-testimonial-user-info">
                                    <h4 className="title">David Smith</h4>
                                    <span>Managing Director</span>
                                </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="ks-testimonial-user-wrap d-flex align-items-center">
                                <div className="thumb">
                                    <img src="/images/resource/testi-h2-2.jpg" alt="" />
                                </div>
                                <div className="ks-testimonial-user-info">
                                    <h4 className="title">Burgund Flemming</h4>
                                    <span>CEO & Co Founder</span>
                                </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="col-lg-6 col-xl-7 col-md-5 col-sm-6">
                        <div className="ks-testimonial-navigation">
                            <button className="arrow-prev"><svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.0714 7.7167L4.63112 7.71661L9.01907 12.1046L7.66778 13.4559L0.973023 6.76111L7.66778 0.0663526L9.01908 1.41765L4.63114  5.80559L18.0714 5.80552L18.0714 7.7167Z" fill="#FFFFFF"/>
                            </svg></button>
                            <button className="arrow-next"><svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.713769 6.2833L14.154 6.28339L9.76608 1.89543L11.1174 0.544136L17.8121 7.23889L11.1174 13.9336L9.76608 12.5824L14.154  8.19441L0.713769 8.19448L0.713769 6.2833Z" fill="#FFFFFF"/>
                            </svg></button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default TestimonialSection;
