"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import serviceIcon1 from "@/public/images/icons/service-h1-1.png";
import serviceIcon2 from "@/public/images/icons/service-h1-2.png";
import serviceIcon3 from "@/public/images/icons/service-h1-3.png";
import serviceImg1 from "@/public/images/resource/service-h1-1.jpg";
import serviceImg2 from "@/public/images/resource/service-h1-2.jpg";
import serviceImg3 from "@/public/images/resource/service-h1-3.jpg";

const ServicesSectionH1 = () => {
  return (
    <section className="services-section-h1 pb-0">
        <div className="outer-box">
            <div className="upper-box">
                <div className="sec-title-h1 white text-center">
                    <h6 className="sub-title">How it work</h6>
                    <h2 className="title char-animation">Our Approach Is To Create</h2>
                </div>
                <div className="auto-container">
                    <div className="row gx-3">
                    <div
                        className="service-block col-xl-4 col-md-6 wow fadeInUp"
                        data-wow-delay="400ms">
                        <div className="inner-block">
                        <div className="number">01</div>
                        <h4 className="title">Project Planning</h4>
                        <ul className="list-style-two">
                            <li>Project Research</li>
                            <li>Competitive Analysis</li>
                            <li>Define Flow</li>
                        </ul>
                        <div className="icon">
                            <Image src={serviceIcon1} alt="Service Icon" />
                        </div>
                        </div>
                    </div>
                    <div
                        className="service-block col-xl-4 col-md-6 wow fadeInUp"
                        data-wow-delay="400ms">
                        <div className="inner-block">
                        <div className="number">02</div>
                        <h4 className="title">Development</h4>
                        <ul className="list-style-two">
                            <li>Project Development</li>
                            <li>Execution</li>
                            <li>Error Fixing</li>
                        </ul>
                        <div className="icon">
                            <Image src={serviceIcon2} alt="Service Icon" />
                        </div>
                        </div>
                    </div>
                    <div
                        className="service-block col-xl-4 col-md-6 wow fadeInUp"
                        data-wow-delay="400ms">
                        <div className="inner-block mb-0">
                        <div className="number">03</div>
                        <h4 className="title">Quick Support</h4>
                        <ul className="list-style-two">
                            <li>Quality assurance</li>
                            <li>Launch Product</li>
                            <li>Maintenance</li>
                        </ul>
                        <div className="icon">
                            <Image src={serviceIcon3} alt="Service Icon" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="lower-box">
                <div className="auto-container">
                    <div className="sec-title-h1 white">
                        <h6 className="sub-title">Our Services</h6>
                        <h2 className="title char-animation">
                            Empower Your Business With <br />
                            Innovative Digital Services
                        </h2>
                    </div>
                    <div className="service-block-h1">
                        <div className="inner-box">
                            <div className="image-box">
                            <Link href="/page-service-details">
                                <Image src={serviceImg1} alt="Service Image" />
                            </Link>
                            </div>
                            <div className="content-box">
                            <div className="title-box">
                                <div className="number">01.</div>
                                <div className="title">
                                <Link href="/page-service-details">Brand Identity</Link>
                                </div>
                            </div>
                            <div className="icon-box">
                                <Link href="/page-service-details">
                                <i className="icon fa-light fa-arrow-right-long"></i>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-block-h1">
                        <div className="inner-box">
                            <div className="image-box">
                            <Link href="/page-service-details">
                                <Image src={serviceImg2} alt="Service Image" />
                            </Link>
                            </div>
                            <div className="content-box">
                            <div className="title-box">
                                <div className="number">02.</div>
                                <div className="title">
                                <Link href="/page-service-details">UX / UI Design</Link>
                                </div>
                            </div>
                            <div className="icon-box">
                                <Link href="/page-service-details">
                                <i className="icon fa-light fa-arrow-right-long"></i>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-block-h1">
                        <div className="inner-box">
                            <div className="image-box">
                            <Link href="/page-service-details">
                                <Image src={serviceImg3} alt="Service Image" />
                            </Link>
                            </div>
                            <div className="content-box">
                            <div className="title-box">
                                <div className="number">03.</div>
                                <div className="title">
                                <Link href="/page-service-details">App Agency</Link>
                                </div>
                            </div>
                            <div className="icon-box">
                                <Link href="/page-service-details">
                                <i className="icon fa-light fa-arrow-right-long"></i>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="service-block-h1 mb-0">
                        <div className="inner-box">
                            <div className="image-box">
                                <Link href="/page-service-details">
                                    <Image src={serviceImg3} alt="Service Image" />
                                </Link>
                            </div>
                            <div className="content-box">
                                <div className="title-box">
                                    <div className="number">04.</div>
                                    <div className="title">
                                    <Link href="/page-service-details">Digital Marketing</Link>
                                    </div>
                                </div>
                                <div className="icon-box">
                                    <Link href="/page-service-details">
                                        <i className="icon fa-light fa-arrow-right-long"></i>
                                    </Link>
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

export default ServicesSectionH1;
