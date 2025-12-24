"use client";
import React from "react";
import Image from "next/image";
import CounterUp from '../../elements/CounterUp';

const AboutSectionH3 = () => {
  return (
    <section className="about-section-h3">
      <div className="auto-container">
        <div className="outer-box">
          <div className="row">
            <div className="content-column col-xl-7 col-lg-8">
              <div className="inner-column">
                <div className="anim-icon">
                  <Image
                    src="/images/icons/about-h3-1.png"
                    alt="Icon"
                    width={80}
                    height={80}/>
                </div>
                <div className="sec-title-h1 anim-text-flip-move">
                  <h6 className="sub-title">Who we are</h6>
                  <h2 className="title">
                    We Handle Complexities, So You Can Drive Growth And Success.
                  </h2>
                </div>
                <div className="img-counter-box d-md-flex align-item-end justify-content-md-between mb-5 mb-xl-0">
                  <div
                    className="counter-block mb-4 mb-md-0 pb-0 anim-fade-move"
                    data-fade-from="right"
                    data-delay="0.15">
                    <div className="inner border-0 ps-0 pb-0 pe-5 mb-5 mb-sm-0">
                      <div className="info-box d-block">
                        <div className="count-box">
                          <span
                            className="count-text"
                            data-speed="3000">
                            <CounterUp end={15} />
                          </span>
                          <sup>+</sup>
                        </div>
                      </div>
                      <div className="counter-title">Years Of Experience</div>
                    </div>
                  </div>
                  <div
                    className="image-1 ms-0 ms-md-5 ms-xl-0 anim-fade-move"
                    data-fade-from="left"
                    data-delay="0.15">
                    <Image
                      src="/images/resource/about3-1.jpg"
                      alt="About Image"
                      width={420}
                      height={420}
                      className="w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="image-column col-xl-5 col-md-12">
              <div className="inner-column">
                <div
                  className="image-1 anim-fade-move"
                  data-fade-from="left"
                  data-delay="0.15">
                  <Image
                    src="/images/resource/about3-2.jpg"
                    alt="About Image"
                    width={500}
                    height={600}
                    className="w-100"/>
                </div>
                <div
                  className="img-content anim-fade-move"
                  data-fade-from="left"
                  data-delay="0.15">
                  <div className="text">
                    Lorem ipsum dolor sit amet consectetur. Ac purus pharetra est
                    et. Dictum donec urna vitae in nibh. Pharetra id rhoncus eu
                    viverra morbi maecenas aliquet.
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

export default AboutSectionH3;
