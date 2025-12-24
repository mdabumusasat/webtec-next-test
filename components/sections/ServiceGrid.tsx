"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Website Design <br/>(UI/UX)",
    image: "/images/service/service-2-1.jpg",
    features: [
      "Website Maintenance & Updates",
      "Performance Optimization",
      "Security Monitoring",
      "Backup & Recoveryt",
    ],
  },
  {
    title: "Corporate/Portfolio <br/>Websites",
    image: "/images/service/service-2-2.jpg",
    features: [
      "Website Maintenance & Updates",
      "Performance Optimization",
      "Security Monitoring",
      "Backup & Recoveryt",
    ],
  },
  {
    title: "Maintenance & <br/> Support",
    image: "/images/service/service-2-3.jpg",
    features: [
      "Website Maintenance & Updates",
      "Performance Optimization",
      "Security Monitoring",
      "Backup & Recoveryt",
    ],
  },
  {
    title: "Branding & <br/>Creative Design",
    image: "/images/service/service-2-4.jpg",
    features: [
      "Website Maintenance & Updates",
      "Performance Optimization",
      "Security Monitoring",
      "Backup & Recoveryt",
    ],
  },
  {
    title: "Website Design <br/>(UI/UX)",
    image: "/images/service/service-2-1.jpg",
    features: [
      "Website Maintenance & Updates",
      "Performance Optimization",
      "Security Monitoring",
      "Backup & Recoveryt",
    ],
  },
  {
    title: "Corporate/Portfolio <br/>Websites",
    image: "/images/service/service-2-2.jpg",
    features: [
      "Website Maintenance & Updates",
      "Performance Optimization",
      "Security Monitoring",
      "Backup & Recoveryt",
    ],
  },
];

const ServiceSectionTwo = () => {
  return (
    <section className="ks-service-area ks-service-style-2">
      <div className="auto-container">
        <div className="row">
          {services.map((service, index) => (
            <div key={index} className="col-xl-4 col-md-6">
              <div className="ks-service-item">
                <h4 className="ks-service-title">
                  <Link
                    href="/page-service-details"
                    className="border-line"
                    dangerouslySetInnerHTML={{ __html: service.title }}
                  />
                </h4>
                <div className="ks-service-thumb">
                  <Image
                    src={service.image}
                    alt="Service"
                    width={400}
                    height={300}
                  />
                  <div className="ks-service-icon">
                    <span>
                      <svg width="28" height="28" viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg">
                        <path fill="currentColor" d="M27.082 11.625 14.705.703a1.9 1.9 0 0 0-2.63 0 1.86 1.86 0 0 0 0 2.32l12.38 10.92a2 2 0 0 0 2.627 0 1.73 1.73 0 0 0 0-2.32Z"/>
                        <path fill="currentColor" d="M11.174 5.01c-.66 2.94-2.26 5.73-4.43 7.98l6.77 6.02c2.54-1.93 5.63-3.39 8.94-3.98l.47-.08L11.268 4.594Z"/>
                        <path fill="currentColor" d="m5.5 14.24-4.63 4.11a2.15 2.15 0 0 0 0 2.53l2.64 2.35c1.09.95 2.95.95 4.0.0l4.63-4.11L5.5 14.24Zm.66 6.46a.96.96 0 0 1-1.33 0 .93.93 0 0 1 0-1.32l1.32-1.18a1.13 1.13 0 0 1 1.58.01 1.0 1.0 0 0 1-.01 1.32L6.16 20.7Z"/>
                        <path fill="currentColor" d="m16.34 19.18-.05.03c-.51.32-1.02.67-1.45 1.0l1.13 1.0c.34.3.35.9.02 1.22l-1.29 1.15-1.9-1.64-2.64 2.35 4.24 3.65c1.1.95 2.96.95 4.0 0a2.0 2.0 0 0 0-.02-2.82l-1.0-.86 1.27-1.13a1.79 1.79 0 0 0-.1-2.66l-1.27-1.14c-.37.24-.75.48-1.08.68Z"/>
                        <path fill="currentColor" d="M19.633 0a1 1 0 0 0-.93.68v1.78c0 .55.52.82.93.82s.93-.27.93-.82V.68A1 1 0 0 0 19.633 0Z"/>
                        <path fill="currentColor" d="M27.07 6.56h-1.86c-.71 0-1.0.43-1.0.83s.29.82 1.0.82h1.86c.71 0 1.0-.42 1.0-.82s-.29-.83-1.0-.83Z"/>
                        <path fill="currentColor" d="M25.868 1.88a1.12 1.12 0 0 0-1.58 0l-1.75 1.64a.93.93 0 0 0 0 1.32c.36.32.95.33 1.32 0l1.95-1.78a.9.9 0 0 0 .0-1.18Z"/>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className="ks-service-list-box">
                  <ul>
                    {service.features.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/page-service-details"
                  className="ks-service-more">
                  More
                </Link>
                <div className="ks-service-link">
                  <Link href="/page-service-details">
                    <svg width="14" height="15" viewBox="0 0 14 15">
                      <path
                        d="M5.90207 14.025V8.295H0.17207V6.09H5.90207V0.374999H8.10707V6.09H13.8221V8.295H8.10707V14.025H5.90207Z"
                        fill="currentcolor"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSectionTwo;
