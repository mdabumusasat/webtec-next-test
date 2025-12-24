"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import news1 from "@/public/images/resource/news1-1.jpg";
import news2 from "@/public/images/resource/news1-2.jpg";

const newsData = [
  {
    id: 1,
    image: news1,
    date: "21",
    month: "Oct",
    category: "Development",
    comments: 2,
    title: "The Power of Storytelling in Digital Branding",
    link: "/news-details",
  },
  {
    id: 2,
    image: news2,
    date: "31",
    month: "Jan",
    category: "UX/UI",
    comments: 5,
    title: "Why Your Brand Needs a Digital Agency in 2024",
    link: "/news-details",
  },
  {
    id: 3,
    image: news1,
    date: "21",
    month: "Oct",
    category: "Development",
    comments: 2,
    title: "The Power of Storytelling in Digital Branding",
    link: "/news-details",
  },
  {
    id: 4,
    image: news2,
    date: "31",
    month: "Jan",
    category: "UX/UI",
    comments: 5,
    title: "Why Your Brand Needs a Digital Agency in 2024",
    link: "/news-details",
  },
];
const NewsSection = () => {
  return (
    <section className="news-section pt-0">
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="content-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <div className="sec-title-h1">
                <h6 className="sub-title">Form the blog</h6>
                <h2 className="title char-animation">
                  Check Out Latest News Update & Articles
                </h2>
              </div>
              <div className="text">
                I cannot say enough good things about the team at kodesolution. They took our vision and turned it into a stunning website that perfectly
              </div>
              <Link href="/news-details" className="theme-btn btn-style-one">
                <span className="btn-arrow-left">
                  <i className="far fa-chevron-right"></i>
                </span>
                <span className="btn-title"> View All Blogs</span>
              </Link>
            </div>
          </div>
          <div className="blocks-column col-xl-8 col-lg-12 col-md-12 col-sm-12">
            <div className="inner-column">
              <Swiper
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={2}
                className="news-swiper-two pb-0">
                {newsData.map((news) => (
                  <SwiperSlide key={news.id}>
                    <div className="news-block">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <Link href={news.link}>
                              <Image src={news.image} alt={news.title} />
                            </Link>
                          </figure>
                          <div className="date-box">
                            <div className="date">{news.date}</div>
                            <div className="month">{news.month}</div>
                          </div>
                        </div>
                        <div className="content-box">
                          <div className="content">
                            <ul className="post-meta">
                              <li>
                                <i className="icon fa fa-comment"></i> {news.comments} Comment
                              </li>
                              <li>
                                <i className="icon fa fa-tags"></i> {news.category}
                              </li>
                            </ul>
                            <h4 className="title">
                              <Link href={news.link}>{news.title}</Link>
                            </h4>
                          </div>
                          <div className="btn-box">
                            <Link href={news.link} className="text">Read More</Link>
                            <Link href={news.link} className="readmore">
                              <i className="fa fa-arrow-right"></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
