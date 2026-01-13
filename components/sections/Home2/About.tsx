"use client";
import React from "react";
import CounterUp from '../../elements/CounterUp';
import Link from "next/link";

const AboutSectionH2 = () => {
  return (
    <section className="about-section-h2">
        <div className="auto-container">
            <div className="row">
                <div className="content-column col-xl-6 col-lg-8 order-xl-2" data-aos="fade-right">
                    <div className="inner-column">
                        <div className="sec-title-h2">
                            <h6 className="sub-title">KNOW ABOUT US</h6>
                            <h2 className="title char-animation">
                                Designing The Web With <br /> Care And Quality
                            </h2>
                            <div className="text">
                                We provide a diverse array of systems, each tailored to
                                streamline your operations and enhance productivity.
                            </div>
                        </div>
                        <div className="icon-outer-box row">
                            <div className="icon-box col-lg-6 col-md-6 col-sm-6">
                                <div className="inner-box">
                                    <div className="count-box counted">
                                    <h2 className="count-text"><CounterUp end={90} /></h2>
                                    <span>%</span>
                                    </div>
                                    <h4 className="title">Business Consulting</h4>
                                    <div className="descrip">
                                    Strategy consultants work closely with organizations
                                    </div>
                                </div>
                            </div>
                            <div className="icon-box col-lg-6 col-md-6 col-sm-6">
                                <div className="inner-box">
                                    <div className="count-box counted">
                                    <h2 className="count-text"><CounterUp end={85} /></h2>
                                    <span>%</span>
                                    </div>
                                    <h4 className="title">Financial Planning</h4>
                                    <div className="descrip">
                                    Strategy consultants work closely with organizations
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-box">
                            <Link href="/page-about" className="theme-btn btn-style-one">
                            <span className="btn-arrow-left">
                                <i className="far fa-chevron-right"></i>
                            </span>
                            <span className="btn-title">Read More</span>
                            </Link>
                            <div className="author-box">
                            <div className="author-image-box">
                                <div className="author-image">
                                <img
                                    src="/images/icons/about-h2-4.png"
                                    alt="Happy Clients"
                                />
                                </div>
                            </div>
                            <div className="text">10M+ Happy Clients</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="image-column col-xl-6 col-lg-8 wow fadeInUp"
                    data-wow-delay="400ms">
                    <div className="inner-column">
                    <div className="shape-1">
                        <img
                        src="/images/icons/about-h2-5.png"
                        alt="Shape"/>
                    </div>
                    <div className="image-box">
                        <div className="icon-1 bounce-y">
                        <img
                            src="/images/icons/about-h2-3.png"
                            alt="Icon"/>
                        </div>
                        <figure className="image">
                        <img
                            src="/images/resource/about-h2-1.jpg"
                            alt="About Image 1"/>
                        </figure>
                        <figure className="image2">
                        <img
                            src="/images/resource/about-h2-2.jpg"
                            alt="About Image 2"/>
                        </figure>
                        <div className="icon">
                        <img
                            src="/images/icons/about-h2-1.png"
                            alt="Icon"/>
                        </div>
                        <div className="shape-1 bounce-y">
                        <img
                            src="/images/icons/about-h2-2.png"
                            alt="Shape"/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutSectionH2;
