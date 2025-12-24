"use client";

import { useState } from "react";
import Image from "next/image";

const benefits = [
  {
    title: "Quality Services",
    text: "Parturient montes nascetur ridiculus mus is maecenas venenatis,neque.",
  },
  {
    title: "Professional Experts",
    text: "Parturient montes nascetur ridiculus mus is maecenas venenatis,neque.",
  },
  {
    title: "99% Success Rates",
    text: "Parturient montes nascetur ridiculus mus is maecenas venenatis,neque.",
  },
];

const WhyChooseUsSection = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="why-choose-us-section-h3">
      <div className="bg bg-image">
        <Image
          src="/images/background/whu-h3-1.jpg"
          alt="Background"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="content-column col-xl-6 col-lg-12 order-2">
            <div className="inner-column">
              <div className="sec-title-h1 white">
                <h6 className="sub-title">Why choose us</h6>
                <h2 className="title">
                  Why You Should <br /> Choose Our Agency
                </h2>
                <div className="text">
                  The primary goal of business market is to help <br />
                  organizations improve their performance.
                </div>
              </div>
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="why-choose-us-block-h3"
                  onMouseEnter={() => setActiveIndex(index)}>
                  <div
                    className={`inner-box ${
                      activeIndex === index ? "active" : ""
                    }`}>
                    <div className="icon-box">
                      <i className="icon fa-light fa-wand-magic-sparkles"></i>
                    </div>
                    <div className="content-box">
                      <h4 className="title">{item.title}</h4>
                      {activeIndex === index && (
                        <div className="text">
                          {item.text.split(", ").map((line, i) => (
                            <span key={i}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="image-column col-xl-6 col-lg-12">
            <div className="inner-column">
              <figure className="image">
                <Image
                  src="/images/resource/wcu-h3-1.jpg"
                  alt="Why Choose Us"
                  width={600}
                  height={700}
                />
              </figure>
              <div className="exp-box bounce-x">
                <i className="icon fa-light fa-wand-magic-sparkles"></i>
                <div className="cat">GROW BUSINESS</div>
                <h4 className="title">
                  We Help Your Business <br />
                  To Become More <br />
                  Stronger
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
