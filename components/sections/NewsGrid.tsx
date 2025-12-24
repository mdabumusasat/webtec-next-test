"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const newsData = [
  {
    image: "/images/resource/news1-1.jpg",
    day: "21",
    month: "Oct",
    comments: "2 Comment",
    category: "Development",
    title: "The Power of Storytelling in Digital Branding",
  },
  {
    image: "/images/resource/news1-2.jpg",
    day: "31",
    month: "Jan",
    comments: "5 Comment",
    category: "UX/UI",
    title: "Why Your Brand Needs a Digital Agency in 2024",
  },
  {
    image: "/images/resource/news1-1.jpg",
    day: "21",
    month: "Oct",
    comments: "2 Comment",
    category: "Development",
    title: "The Power of Storytelling in Digital Branding",
  },
  {
    image: "/images/resource/news1-1.jpg",
    day: "21",
    month: "Oct",
    comments: "2 Comment",
    category: "Development",
    title: "The Power of Storytelling in Digital Branding",
  },
  {
    image: "/images/resource/news1-2.jpg",
    day: "31",
    month: "Jan",
    comments: "5 Comment",
    category: "UX/UI",
    title: "Why Your Brand Needs a Digital Agency in 2024",
  },
  {
    image: "/images/resource/news1-1.jpg",
    day: "21",
    month: "Oct",
    comments: "2 Comment",
    category: "Development",
    title: "The Power of Storytelling in Digital Branding",
  },
];

const NewsSection = () => {
  return (
    <section className="news-section pt-100">
      <div className="auto-container">
        <div className="row">
          {newsData.map((item, index) => (
            <div
              key={index}
              className="news-block col-lg-4 col-md-6">
              <div className="inner-box mb-30">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/news-details">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={400}
                        height={280}
                      />
                    </Link>
                  </figure>
                  <div className="date-box">
                    <div className="date">{item.day}</div>
                    <div className="month">{item.month}</div>
                  </div>
                </div>
                <div className="content-box">
                  <div className="content">
                    <ul className="post-meta">
                      <li>
                        <i className="icon fa fa-comment"></i>{" "}
                        {item.comments}
                      </li>
                      <li>
                        <i className="icon fa fa-tags"></i>{" "}
                        {item.category}
                      </li>
                    </ul>
                    <h4 className="title">
                      <Link href="/news-details">
                        {item.title}
                      </Link>
                    </h4>
                  </div>
                  <div className="btn-box">
                    <Link href="/news-details" className="text">
                      Read More
                    </Link>
                    <Link
                      href="/news-details"
                      className="readmore"
                      aria-label="Read More">
                      <i className="fa fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
