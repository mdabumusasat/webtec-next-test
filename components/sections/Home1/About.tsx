"use client";

import Image from "next/image";
import Link from "next/link";
import aboutImg1 from "@/public/images/resource/about-h1-1.jpg";
import aboutImg2 from "@/public/images/resource/about-h1-2.jpg";
import icon1 from "@/public/images/icons/about-h1-3.png";
import icon2 from "@/public/images/icons/about-h1-4.png";
import icon3 from "@/public/images/icons/about-h1-5.png";
import ProgressBar from "@/components/elements/ProgressBar";


const AboutSection = () => {
 
  return (
    <section className="about-section-h1">
        <div className="outer-box">
            <div className="row">
                <div className="image-column-one col-xxl-4 col-xl-6 col-lg-12">
                    <div className="inner-column">
                        <div className="image wow img-custom-anim-left">
                            <Image src={aboutImg1} alt="About Image" />
                        </div>
                        <div className="icon tm-gsap-animate-circle">
                            <Image src={icon1} alt="Icon" />
                        </div>
                    </div>
                </div>
                <div className="about-block-h1 col-xxl-5 col-xl-6 col-lg-12">
                    <div className="inner-block wow fadeInUp" data-wow-delay="200ms">
                        <div className="sec-title-h1">
                            <h6 className="sub-title">KNOW ABOUT US</h6>
                            <h2 className="title">
                            We Optimize Your Funnel For Higher Conversions
                            </h2>
                            <div className="text">
                            There are many variations of passages of available but the
                            majority have suffered alteration in some form, by injected
                            hum randomised words which don&apos;t slightly available but
                            the majority
                            </div>
                        </div>
                        <div className="list-info-box">
                            <div className="inner-box">
                                <ul className="list-style-one">
                                    <li>
                                    <i className="fas fa-check-circle" aria-hidden="true"></i>
                                    Innovative Solutions
                                    </li>
                                    <li>
                                    <i className="fas fa-check-circle" aria-hidden="true"></i>
                                    Secure Transactions
                                    </li>
                                </ul>
                                <ul className="list-style-one">
                                    <li>
                                    <i className="fas fa-check-circle" aria-hidden="true"></i>
                                    User-Friendly Interface
                                    </li>
                                    <li>
                                    <i className="fas fa-check-circle" aria-hidden="true"></i>
                                    Real-Time Analytics
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="progress-single">
                            <h5 className="progress-title">Marketing</h5>
                            <ProgressBar percentage={90} duration={3000} />
                        </div>
                        <Link href="/page-about" className="theme-btn btn-style-one">
                            <span className="btn-arrow-left">
                                <i className="far fa-chevron-right"></i>
                            </span>
                            <span className="btn-title">Discover More</span>
                        </Link>
                    </div>
                </div>
                <div className="image-column-two col-xxl-3">
                    <div className="inner-column">
                        <div className="icon-one bounce-y">
                            <Image src={icon2} alt="Icon" />
                        </div>
                        <div className="icon-two">
                            <Image src={icon3} alt="Icon" />
                        </div>
                        <div className="image wow img-custom-anim-right">
                            <Image src={aboutImg2} alt="About Image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default AboutSection;
