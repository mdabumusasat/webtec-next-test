"use client";

import React from "react";
import Link from "next/link";

const pricingPlans = [
  {
    title: "Regular Plan",
    price: 39,
    features: [
      "Managed IT Services",
      "Data Backup & Recovery",
      "Cyber Security",
      "24/7 Remote Support",
    ],
  },
  {
    title: "Standard Plan",
    price: 99,
    features: [
      "Network Security Audit",
      "Support Management",
      "Cybersecurity Training",
      "24/7 Remote Support",
    ],
  },
  {
    title: "Ultimate Plan",
    price: 199,
    features: [
      "Cloud Migration",
      "Support Management",
      "Network Security Audit",
      "24/7 Remote Support",
    ],
  },
];

const PricingSectionFour = () => {
  return (
    <section className="pricing-section-four">
      <div className="auto-container">
        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="pricing-block-four col-md-6 col-lg-4">
              <div className="inner-box">
                <div className="content-column">
                  <div className="inner-column wow fadeInLeft">
                    <span className="pricing-title">{plan.title}</span>
                    <h6 className="pricing-amount">
                      <sup>$</sup>
                      {plan.price} <span>per month</span>
                    </h6>
                    <ul className="list-style-two">
                      {plan.features.map((feature, i) => (
                        <li key={i}>
                          <i className="icon fa fa-circle-check"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/page-pricing"
                      className="theme-btn btn-style-one book-now">
                      <span className="btn-title">Choose Package</span>
                    </Link>
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

export default PricingSectionFour;
