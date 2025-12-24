"use client";
import React from "react";
import Image from "next/image";
import bgImage from "@/public/images/background/contact-bg-2.jpg";
import shapeIcon from "@/public/images/icons/shape-style11.png";

const ContactSection = () => {

  return (
    <section className="contact-section-h1 pt-0">
      <div className="outer-container">
        <div className="outer-box">
          <div className="bg bg-image overflow-hidden">
            <Image src={bgImage} alt="Contact Background" fill />
          </div>
          <div className="anim-icons">
            <div className="image-1 tm-gsap-animate-circle">
              <Image src={shapeIcon} alt="Shape Icon" />
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-7 col-xl-6"></div>
            <div className="form-column col-xxl-5 col-xl-6 order-2">
              <div className="inner-column ps-xl-3">
                <div className="contact-form bg-transparent pt-30 pt-lg-40 pb-30 pb-lg-40 wow fadeInLeft">

                  <div className="sec-title-h1 anim-text-flip-move">
                    <h6 className="sub-title wow fadeInUp">Send Message</h6>
                    <h2 className="title char-animation">
                      Crafting Digital <br /> Strategies That Work
                    </h2>
                  </div>
                  <form id="contact_form" name="contact_form" action="#" method="post">
                    <div className="row">
                      <div className="form-group col-lg-6 col-md-6 pl-0">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          required
                        />
                      </div>
                      <div className="form-group col-lg-6 col-md-6">
                        <input
                          type="email"
                          name="email"
                          placeholder="E-mail"
                          required
                        />
                      </div>
                      <div className="form-group col-lg-6 col-md-6 pl-0">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                        />
                      </div>
                      <div className="form-group col-lg-6 col-md-6">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="form-group col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Message"
                          rows={2}
                        ></textarea>
                      </div>
                      <div className="form-group col-lg-12">
                        <div className="btn-box mt-10">
                          <button type="submit" className="theme-btn btn-style-one contact-btn w-100" data-loading-text="Please wait..."><span className="btn-title">Send a Message</span></button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
