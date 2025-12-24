"use client";
import React from "react";
import Link from "next/link";

const NewsSectionH2 = () => {
  return (
    <section className="news-section-h2">
      <div className="auto-container">
        <div className="sec-title-h2 text-center">
          <h6 className="sub-title wow fadeInUp">FROM THE BLOG</h6>
          <h2 className="title wow fadeInUp">News & Articles</h2>
        </div>
        <div className="row">
          <div className="news-block-h2 col-xl-4 col-md-6 wow fadeInUp">
            <div className="inner-block">
              <div className="images-box">
                <div className="inner-box">
                  <div className="image">
                    <img src="/images/resource/news-h2-1.jpg" alt="News" />
                    <img src="/images/resource/news-h2-1.jpg" alt="News" />
                  </div>
                  <div className="date-box">
                    <div className="date">21</div>
                    <div className="month">Oct</div>
                  </div>
                </div>
              </div>
              <div className="content-box">
                <div className="inner-box">
                  <ul className="post-meta">
                    <li>
                      <i className="fa-regular fa-circle-user" /> By shadhin
                    </li>
                    <li>
                      <i className="fa-light fa-comments" /> 1 Comment
                    </li>
                  </ul>
                  <h4 className="title">
                    <Link href="/news-details">
                      The Power of Storytelling in Digital Branding
                    </Link>
                  </h4>
                  <div className="text">
                    Parturient platea sociis congue maecenas dictumst imperdiet
                    velit pellentesque rutrum molestie diam tempor tortor aptent
                    natoque
                  </div>
                  <Link href="/news-details" className="theme-btn">
                    <i className="icon fa-solid fa-right" />
                    <span className="btn-title">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="news-block-h2 col-xl-4 col-md-6 wow fadeInUp">
            <div className="inner-block">
              <div className="images-box">
                <div className="inner-box">
                  <div className="image">
                    <img src="/images/resource/news-h2-2.jpg" alt="News" />
                    <img src="/images/resource/news-h2-2.jpg" alt="News" />
                  </div>
                  <div className="date-box">
                    <div className="date">31</div>
                    <div className="month">Jan</div>
                  </div>
                </div>
              </div>
              <div className="content-box">
                <div className="inner-box">
                  <ul className="post-meta">
                    <li>
                      <i className="fa-regular fa-circle-user" /> By shadhin
                    </li>
                    <li>
                      <i className="fa-light fa-comments" /> 5 Comments
                    </li>
                  </ul>
                  <h4 className="title">
                    <Link href="/news-details">
                      Why Your Brand Needs a Digital Agency in 2025
                    </Link>
                  </h4>
                  <div className="text">
                    Parturient platea sociis congue maecenas dictumst imperdiet
                    velit pellentesque rutrum molestie diam tempor tortor aptent
                    natoque
                  </div>
                  <Link href="/news-details" className="theme-btn">
                    <i className="icon fa-solid fa-right" />
                    <span className="btn-title">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="news-block-h2 col-xl-4 col-md-6 wow fadeInUp">
            <div className="inner-block">
              <div className="images-box">
                <div className="inner-box">
                  <div className="image">
                    <img src="/images/resource/news-h2-3.jpg" alt="News" />
                    <img src="/images/resource/news-h2-3.jpg" alt="News" />
                  </div>
                  <div className="date-box">
                    <div className="date">31</div>
                    <div className="month">Jan</div>
                  </div>
                </div>
              </div>
              <div className="content-box">
                <div className="inner-box">
                  <ul className="post-meta">
                    <li>
                      <i className="fa-regular fa-circle-user" /> By shadhin
                    </li>
                    <li>
                      <i className="fa-light fa-comments" /> 1 Comment
                    </li>
                  </ul>
                  <h4 className="title">
                    <Link href="/news-details">
                      Make a Marketing Strategy for your Small Business
                    </Link>
                  </h4>
                  <div className="text">
                    Parturient platea sociis congue maecenas dictumst imperdiet
                    velit pellentesque rutrum molestie diam tempor tortor aptent
                    natoque
                  </div>
                  <Link href="/news-details" className="theme-btn">
                    <i className="icon fa-solid fa-right" />
                    <span className="btn-title">Read More</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSectionH2;
