"use client";
import React from "react";
import Link from "next/link";

const ContactSectionH2 = () => {
  return (
    <section className="contact-section-h2">
      <div className="outer-box">
        <div className="bg bg-pattern-13"></div>
        <div className="shape-11"></div>
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="content-column col-xl-6 col-lg-6 col-md-12 col-sm-12 wow fadeInLeft">
              <div className="inner-column">
                <div className="sec-title-h1 white wow fadeInUp">
                  <h6 className="sub-title mb-10 wow fadeInUp">Contact us</h6>
                  <h2 className="title">Get in Touch</h2>
                </div>
                <div className="contact-form">
                  <form method="post" action="#" id="contact-form">
                    <div className="row">
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                        />
                      </div>
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input
                          type="text"
                          name="subject"
                          placeholder="Subject"
                        />
                      </div>
                      <div className="form-group col-lg-6 col-md-6 col-sm-12">
                        <input
                          type="tel"
                          name="tel"
                          placeholder="Phone"
                        />
                      </div>
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <textarea
                          name="message"
                          placeholder="Write a Message"
                        ></textarea>
                      </div>
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <div className="btn-box">
                          <button className="theme-btn btn-style-one" type="submit">
                            <span className="btn-title">Send a Message</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="image-column col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <figure className="image">
                  <img
                    src="/images/resource/contact1-1.jpg"
                    alt="Contact Image"
                  />
                </figure>
                <div className="info-box wow fadeInUp" data-wow-delay="300ms">
                  <i className="icon fa fa-phone"></i>
                  <div className="content">
                    <div className="title">Call us anytime</div>
                    <h4 className="phone">
                      <Link href="#">+00 000 222 000</Link>
                    </h4>
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

export default ContactSectionH2;
