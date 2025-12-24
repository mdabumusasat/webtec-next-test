"use client";
import React, {useState} from "react";
import Link from "next/link";
import ModalVideo from 'react-modal-video';

const BannerSectionH3 = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
    <section className="banner-section-h3">
      <div className="outer-box">
        <div
          className="anim-icon wow fadeInUp bounce-y"
          data-wow-delay="600ms">
          <img src="/images/icons/banner-h3-4.jpg" alt="Icon" />
        </div>
        <div className="shape-1 wow fadeInUp" data-wow-delay="600ms">
          <img src="/images/icons/banner-h3-5.png" alt="Shape" />
        </div>
        <div
          className="shape-2 wow fadeInUp bounce-y"
          data-wow-delay="600ms">
          <img src="/images/icons/banner-h3-6.png" alt="Shape" />
        </div>
        <div className="outer-container">
          <div className="row">
            <div className="banner-content col-lg-8">
              <div className="inner-content">
                <h6
                  className="sub-title wow fadeInUp"
                  data-wow-delay="200ms">
                  SOLUTIONS FOR Creative Products
                </h6>
                <h1
                  className="banner-title wow fadeInUp"
                  data-wow-delay="400ms">
                  We Creating Quality Web Design
                </h1>
                <div
                  className="text wow fadeInUp"
                  data-wow-delay="400ms">
                  Creative Web Design Agency
                </div>
                <Link
                  href="/page-contact"
                  className="theme-btn btn-style-one wow fadeInUp"
                  data-wow-delay="600ms">
                  <span className="btn-arrow-left">
                    <i className="far fa-chevron-right" />
                  </span>
                  <span className="btn-title">Get In Touch</span>
                </Link>
                <a
                  className="video-box tm-gsap-animate-circle"
                  data-fancybox="gallery"
                  onClick={() => setOpen(true)}>
                  <img
                    src="/images/icons/banner-h3-2.png"
                    alt="Play Video"
                  />
                </a>
              </div>
            </div>
            <div className="image-column col-lg-4">
              <div
                className="inner-column wow fadeInUp"
                data-wow-delay="600ms">
                <div className="hero-image">
                  <img
                    src="/images/banner/banner-h3-3.png"
                    alt="Hero"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tm-text-editor-advanced wow img-custom-anim-left">
          WEBTEC
        </div>
      </div>
    </section>
    <ModalVideo
      channel="youtube"
      isOpen={isOpen}
      videoId="YOUR_VIDEO_ID"
      onClose={() => setOpen(false)}
      youtube={{
        autoplay: 1,
      }}
    />

    </>
  );
};

export default BannerSectionH3;
