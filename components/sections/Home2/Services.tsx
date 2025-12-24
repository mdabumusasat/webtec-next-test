"use client";
import React, { useState } from "react";
import Link from "next/link";

const ServicesSectionTwo = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      id: 0,
      number: "{01}",
      title: "Advanced Analytics",
      icon: "/images/icons/wcu-h1-1.png",
      image: "/images/resource/services-h2-1.jpg",
    },
    {
      id: 1,
      number: "{02}",
      title: "Video Production",
      icon: "/images/icons/wcu-h1-2.png",
      image: "/images/resource/services-h2-2.jpg",
    },
    {
      id: 2,
      number: "{03}",
      title: "System and Software",
      icon: "/images/icons/wcu-h1-3.png",
      image: "/images/resource/services-h2-3.jpg",
    },
  ];

  return (
    <section className="services-section-two home2-style">
      <div className="outer-box">
        <div className="auto-container">

          {services.map((service, index) => (
            <div
              key={service.id}
              className="service-block-two home2-style anim-fade-move"
            >
              <div
                className={`inner-box ${
                  activeIndex === index ? "active" : ""
                }`}
                onClick={() => setActiveIndex(index)}
                style={{ cursor: "pointer" }}
              >
                {/* Title */}
                <div className="title-box">
                  <div className="number">
                    <span>{service.number}</span>
                  </div>
                  <div className="title">{service.title}</div>
                  <div className="icon-box">
                    <img src={service.icon} alt="" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`content-box ${
                    activeIndex === index ? "active" : ""
                  }`}
                >
                  <div className="row">
                    <div className="image-column col-lg-6">
                      <div className="inner-column">
                        <figure className="image">
                          <img src={service.image} alt="" />
                        </figure>
                        <div className="icon-box">
                          <Link href="/page-service-details">
                            <span className="inner">
                              <i className="icon lnr-icon-arrow-right"></i>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="content-column col-lg-6 col-xxl-5 offset-xxl-1">
                      <div className="inner-column">
                        <div className="text">
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit sed diam nonummy nibh euismod tincidunt.
                        </div>

                        <div className="info-list">
                          <div className="list-item">
                            <span>Branding identity</span> UI/UX Design
                          </div>
                          <div className="list-item">
                            <span>Strategy and planning</span> Wireframe & Prototype
                          </div>
                          <div className="list-item">
                            <span>rebrand</span> motion
                          </div>
                          <div className="list-item">
                            <span>pitchdeck</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ServicesSectionTwo;
