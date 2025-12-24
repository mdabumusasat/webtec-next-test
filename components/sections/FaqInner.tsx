"use client";
import React, { useState } from "react";

const faqData = [
  {
    question: "How to soft launch your business?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary.",
  },
  {
    question: "Is my technology allowed on tech?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary.",
  },
  {
    question: "How to turn visitors into contributors",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary.",
  },
  {
    question: "How can i find my solutions?",
    answer:
      "There are many variations of passages the majority have suffered alteration in some fo injected humour or random ised words believ able lorem Ipsum generators on the internet tend to repeat predefined chunks as necessary.",
  },
];

const AccordionBox = ({ defaultActive = 0 }: { defaultActive?: number }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(defaultActive);
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <ul className="accordion-box wow fadeInRight">
      {faqData.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <li
            key={index}
            className={`accordion block ${isActive ? "active-block" : ""}`}>
            <div
              className={`acc-btn ${isActive ? "active" : ""}`}
              onClick={() => toggleAccordion(index)}>
              {item.question}
              <div className="icon fa fa-plus"></div>
            </div>
            <div
              className={`acc-content ${isActive ? "current" : ""}`}
              style={{ display: isActive ? "block" : "none" }}>
              <div className="content">
                <div className="text">{item.answer}</div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
const FaqAccordionSection = () => {
  return (
    <section className="pt-120 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <AccordionBox defaultActive={0} />
          </div>
          <div className="col-lg-6">
            <AccordionBox defaultActive={0} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAccordionSection;
