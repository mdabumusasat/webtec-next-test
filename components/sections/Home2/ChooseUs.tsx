"use client";
import React from "react";
import Link from "next/link";

const ChooseUsSection = () => {
  return (
    <section className="ks-choose-2-area home2-style">
      <div className="outer-box">
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-8">
              <div className="ks-choose-2-content">
                <div className="sec-title-h1 white">
                  <h6 className="sub-title">why choose us</h6>
                  <h2 className="title char-animation">
                    Why You Should Choose This Company?
                  </h2>
                </div>
                <div className="ks_fade_anim" data-delay=".3">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking
                    at its layout. The point of using Lorem Ipsum is that it
                    has a more.reader will be distracted
                  </p>
                </div>
                <div
                  className="ks-choose-2-more-wrap flex-wrap d-sm-flex align-items-center ks_fade_anim"
                  data-delay=".5">
                  <div className="ks-choose-2-more-info d-flex align-items-center">
                    <span>
                      <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                        <path fill="white" d="M15 0a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm.88 12.74v1.03h-1.76v-.95l-1.25-.11.15-1.75 1.93.17c.06 0 .11 0 .16-.01.44-.06.77-.43.77-.87 0-.49-.39-.9-.88-.9-1.46 0-2.64-1.18-2.64-2.63 0-.59.19-1.15.55-1.62.3-.4.73-.7 1.2-.86V3.22h1.76v1l1.3.18-.25 1.74-1.79-.26a.88.88 0 0 0-.83.38c-.1.13-.16.3-.16.47 0 .48.39.87.88.87 1.46 0 2.64 1.18 2.64 2.64 0 1.13-.73 2.12-1.76 2.48Z"/>
                        <path fill="white" d="M29.44 16.07c-.78-.81-2.1-.8-2.9 0l-4.15 4.15a2.5 2.5 0 0 0-.39.58c-.56 1.37-1.9 2.32-3.54 2.32h-5.86v-1.76h5.86c1.11 0 2.01-.9 2.01-2.01 0-.72-.33-1.35-.95-1.7a9.7 9.7 0 0 1-4.58 1.08c-2.79 0-5.32-1.12-7.17-2.93-.96.1-2.1.63-2.95 1.48L0 21.98 8.03 30a7.8 7.8 0 0 1 5.34-2.21h4.69c1.61 0 3.15-.64 4.28-1.78l7.08-7.12c.78-.78.79-2.04.02-2.82Z"/>
                      </svg>
                    </span>
                    <b>Less Pay Get <br /> More Benefits</b>
                  </div>
                  <p>The point using Lorem Ipsum <br /> is that it has a more.</p>
                </div>
                <div
                  className="ks_fade_anim"
                  data-delay=".7"
                  data-fade-from="top"
                  data-ease="bounce"
                  data-duration="1"
                >
                  <Link href="/page-contact" className="theme-btn btn-style-one">
                    <span className="btn-arrow-left">
                      <i className="far fa-chevron-right"></i>
                    </span>
                    <span className="btn-title"> Get In Touch</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-md-8">
              <div
                className="ks-choose-2-thumb-wrap p-relative ks_fade_anim"
                data-fade-from="right"
                data-delay=".4">
                <div className="ks-choose-2-icon">
                  <img src="/images/favicon-2.png" alt="" />
                </div>
                <div className="row gx-0">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="ks-choose-2-thumb"> <img src="images/resource/whu-h2-2.jpg" alt=""/> </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="ks-choose-2-circle"><h4 className="text-white"> Reliable <br/> & Transparent</h4></div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="ks-choose-2-circle style-2"><h4 className="text-white"> Sharpen Your <br/>Brand</h4></div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="ks-choose-2-thumb style-2"> <img src="images/resource/whu-h2-3.jpg" alt=""/> </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUsSection;
