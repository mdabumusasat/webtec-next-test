"use client";
import { useState } from "react";

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How Can Business Consulting Benefit My Company?",
      answer:
        "It is widely recognized that a reader's attention can be diverted by the content layout of a page. Many desktop publishing software and website editors now use Lorem Ipsum as their default placeholder",
    },
    {
      question: "What Are the Costs of Your Consulting Services?",
      answer:
        "It is widely recognized that a reader's attention can be diverted by the content layout of a page. Many desktop publishing software and website editors now use Lorem Ipsum as their default placeholder",
    },
    {
      question: "How Do You Measure the Success of a Project?",
      answer:
        "It is widely recognized that a reader's attention can be diverted by the content layout of a page. Many desktop publishing software and website editors now use Lorem Ipsum as their default placeholder",
    },
    {
      question: "Do You Provide Remote Consulting Services?",
      answer:
        "It is widely recognized that a reader's attention can be diverted by the content layout of a page. Many desktop publishing software and website editors now use Lorem Ipsum as their default placeholder",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="outer-box">
        <div className="shape-17"></div>
        <div className="auto-container">
          <div className="row">
            <div className="content-column col-xl-6 col-lg-12 wow fadeInLeft" data-wow-delay="200ms">
              <div className="inner-column">
                <div className="sec-title-h1">
                  <h6 className="sub-title">our faqs</h6>
                  <h2 className="title">
                    Empowering Knowledge: Your Questions Answered
                  </h2>
                </div>
                <ul className="accordion-box">
                  {faqs.map((item, index) => (
                    <li
                      key={index}
                      className={`accordion block ${
                        activeIndex === index ? "active-block" : ""
                      }`}>
                      <div
                        className={`acc-btn ${
                          activeIndex === index ? "active" : ""
                        }`}
                        onClick={() => toggleAccordion(index)}>
                        {item.question}
                        <i className="icon fas fa-chevron-down"></i>
                      </div>
                      <div
                        className={`acc-content ${
                          activeIndex === index ? "current" : ""
                        }`}
                        style={{
                          display: activeIndex === index ? "block" : "none",
                        }}>
                        <div className="content">
                          <div className="text">{item.answer}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="image-column col-xl-6 col-lg-7 mx-auto mx-xl-0">
              <div className="inner-column wow fadeInLeft" data-wow-delay="400ms">
                <figure className="image bounce-x">
                  <img src="/images/resource/faq1-1.png" alt="FAQ Image" />
                </figure>
                <div className="icon-20 bounce-y"></div>
                <div className="icon-21 bounce-x"></div>
                <div className="icon-22"></div>
                <div className="icon-23"></div>
                <div className="icon-24 zoom-one"></div>
                <div className="shape-18 zoom-one"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
