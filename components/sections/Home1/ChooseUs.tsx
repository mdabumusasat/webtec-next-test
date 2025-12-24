"use client";
import React from "react";
import Image from "next/image";
import img1 from "@/public/images/resource/why-choose-us-h1-1.jpg";
import img2 from "@/public/images/resource/why-choose-us-h1-2.jpg";
import img3 from "@/public/images/resource/why-choose-us-h1-3.jpg";
import iconMain from "@/public/images/icons/why-choose-us-h1-1.png";
import animIcon from "@/public/images/icons/why-choose-us-h1-4.png";
import icon1 from "@/public/images/icons/wcu-h1-1.png";
import icon2 from "@/public/images/icons/wcu-h1-2.png";
import icon3 from "@/public/images/icons/wcu-h1-3.png";
import icon4 from "@/public/images/icons/wcu-h1-4.png";

const WhyChooseUsSectionH1 = () => {
  return (
    <section className="why-choose-us-section-h1">
        <div className="auto-container">
            <div className="row align-items-center">
                <div className="image-column col-xl-6">
                    <div className="inner-column">

                    <div className="images-box">
                        <div className="image wow img-custom-anim-left">
                        <Image src={img1} alt="Why Choose Us" />
                        </div>
                    </div>
                    <div className="images-box two">
                        <div className="image wow img-custom-anim-left mb-30">
                        <Image src={img2} alt="Why Choose Us" />
                        </div>
                        <div className="image wow img-custom-anim-left">
                        <Image src={img3} alt="Why Choose Us" />
                        </div>
                    </div>
                    <div className="icon">
                        <Image src={iconMain} alt="Icon" />
                    </div>
                    </div>
                </div>
                <div className="content-column col-xl-6 col-md-12 col-sm-12 wow fadeInLeft">
                    <div className="inner-column">
                        <div className="anim-icon bounce-y">
                            <Image src={animIcon} alt="Animated Icon" />
                        </div>
                        <div className="sec-title-h1">
                            <h6 className="sub-title">WHY CHOOSE US</h6>
                            <h2 className="title char-animation">
                            Why You Should <br /> Choose Our Agency
                            </h2>
                        </div>
                        <div className="icon-outer-box row">
                            <div className="icon-box col-lg-6 col-md-6 col-sm-6">
                            <div className="single-box">
                                <div className="inner-box">
                                <div className="icon">
                                    <Image src={icon1} alt="Digital Growth" />
                                </div>
                                <h4 className="title">
                                    Digital <br /> Growths
                                </h4>
                                </div>
                                <p className="discrip">
                                Write a short description, that will <br />
                                describe something useful.
                                </p>
                            </div>
                            </div>
                            <div className="icon-box col-lg-6 col-md-6 col-sm-6">
                            <div className="single-box">
                                <div className="inner-box">
                                <div className="icon">
                                    <Image src={icon2} alt="Digital Solutions" />
                                </div>
                                <h4 className="title">
                                    Digital <br /> Solutions
                                </h4>
                                </div>
                                <p className="discrip">
                                Write a short description, that will <br />
                                describe something useful.
                                </p>
                            </div>
                            </div>
                            <div className="icon-box col-lg-6 col-md-6 col-sm-6">
                            <div className="single-box mb-0">
                                <div className="inner-box">
                                <div className="icon">
                                    <Image src={icon3} alt="Best Consultancy" />
                                </div>
                                <h4 className="title">
                                    Best <br /> Consultancy
                                </h4>
                                </div>
                                <p className="discrip">
                                Write a short description, that will <br />
                                describe something useful.
                                </p>
                            </div>
                            </div>
                            <div className="icon-box col-lg-6 col-md-6 col-sm-6">
                            <div className="single-box mb-0">
                                <div className="inner-box">
                                <div className="icon">
                                    <Image src={icon4} alt="Expert Developers" />
                                </div>
                                <h4 className="title">
                                    Expert <br /> Developers
                                </h4>
                                </div>
                                <p className="discrip">
                                Write a short description, that will <br />
                                describe something useful.
                                </p>
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

export default WhyChooseUsSectionH1;
