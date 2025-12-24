"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const sidebarServices = [
  "Website Development",
  "Graphic Designing",
  "Digital Marketing",
  "Apps Development",
  "Seo & Content Writing",
  "UI / UX Designing",
];

const faqs = [
  {
    question: "Is my technology allowed on tech?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    question: "How to soft launch your business?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    question: "How to turn visitors into contributors",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
  {
    question: "How can i find my solutions?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour, or randomised words believable.",
  },
];

const ServiceDetailsSection = () => {
  const [activeFaq, setActiveFaq] = useState<number>(1);

  return (
    <section className="services-details pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="service-sidebar">
              <div className="sidebar-widget service-sidebar-single">
                <div className="sidebar-service-list">
                  <ul>
                    {sidebarServices.map((service, index) => (
                      <li
                        key={index}
                        className={index === 1 ? "current" : ""}>
                        <Link href="/page-service-details">
                          <i className="fas fa-angle-right"></i>
                          <span>{service}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="service-details-help">
                  <div className="help-shape-1"></div>
                  <div className="help-shape-2"></div>
                  <h2 className="help-title">
                    Contact with <br /> us for any <br /> advice
                  </h2>
                  <div className="help-icon">
                    <span className="fa-classic fa-thin fa-phone"></span>
                  </div>
                  <div className="help-contact">
                    <p>Need help? Talk to an expert</p>
                    <a href="tel:12463330079">+892 ( 123 ) 112 - 9999</a>
                  </div>
                </div>
                <div className="sidebar-widget service-sidebar-single mt-4">
                  <Link
                    href="/page-contact"
                    className="theme-btn btn-style-one w-100">
                    <span className="btn-title"> Download Pdf File</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="services-details__content">
              <Image
                src="/images/resource/service-details.jpg"
                alt="Service Details"
                width={800}
                height={450}
              />
              <h3 className="mt-4">
                <b>Service Overview</b>
              </h3>
              <p>
                Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet finibus eros. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ndustry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
              </p>
              <p>
                When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur adipis icing elit
              </p>
              <div className="content mt-40">
                <div className="text">
                  <h3>
                    <b>Service Center</b>
                  </h3>
                  <p>
                    Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <blockquote className="blockquote-one">
                    Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod remaining essentially unchanged Lorem ipsum dolor sit amet consec tetur
                  </blockquote>
                </div>
                <div className="feature-list mt-4">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6">
                      <Image
                        src="/images/resource/service-d1.jpg"
                        alt=""
                        width={420}
                        height={233}
                        className="mb-3"
                      />
                      <p>
                        Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing
                      </p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <Image
                        src="/images/resource/service-d2.jpg"
                        alt=""
                        width={420}
                        height={233}
                        className="mb-3"
                      />
                      <p>
                        Lorem ipsum dolor sit amet consec adipis elit Dolor repellat pariatur temporibus doloribus hic conse quatur copy typing refreshing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-25">
                <h3>
                  <b>Frequently Asked Question</b>
                </h3>
                <p>
                  Lorem ipsum is simply free text used by copytyping refreshing. Neque porro est qui dolorem ipsum quia quaed inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <ul className="accordion-box wow fadeInRight">
                  {faqs.map((faq, index) => {
                    const isActive = activeFaq === index;
                    return (
                      <li
                        key={index}
                        className={`accordion block ${
                          isActive ? "active-block" : ""
                        }`}>
                        <div
                          className={`acc-btn ${isActive ? "active" : ""}`}
                          onClick={() => setActiveFaq(index)}>
                          {faq.question}
                          <div className="icon fa fa-plus"></div>
                        </div>
                        <div
                          className={`acc-content ${
                            isActive ? "current" : ""
                          }`}>
                          <div className="content">
                            <div className="text">{faq.answer}</div>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailsSection;
