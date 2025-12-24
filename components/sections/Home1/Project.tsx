"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import p1 from "@/public/images/resource/project-h1-1.jpg";
import p2 from "@/public/images/resource/project-h1-2.jpg";
import p3 from "@/public/images/resource/project-h1-3.jpg";
import p4 from "@/public/images/resource/project-h1-4.jpg";
import p5 from "@/public/images/resource/project-h1-5.jpg";
import p6 from "@/public/images/resource/project-h1-6.jpg";

const projects = [
  {
    image: p1,
    category: "Development",
    title: "Future Management \nDevelopment",
    delay: "100ms",
  },
  {
    image: p2,
    category: "Design",
    title: "Digital Marketing Agency \nGrowth",
    delay: "200ms",
  },
  {
    image: p3,
    category: "Technology",
    title: "SEO Marketing Result \nGrowth in Website",
    delay: "300ms",
  },
  {
    image: p4,
    category: "Security",
    title: "Social Marketing",
    delay: "400ms",
  },
  {
    image: p5,
    category: "Development",
    title: "Web Design",
    delay: "500ms",
  },
  {
    image: p6,
    category: "Technology",
    title: "Web Marketing",
    delay: "600ms",
  },
];
const ProjectSectionH1 = () => {
  return (
    <section className="project-section-h1">
      <div className="outer-box">
        <div className="sec-title-h1 text-center">
          <h6 className="sub-title">Selected works</h6>
          <h2 className="title char-animation">Showcasing Your Projects</h2>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-block-h1 col-xl-4 col-md-6 wow fadeInUp"
              data-wow-delay={project.delay}>
              <div className="inner-block">
                <div className="image">
                  <Link href="/page-project-details">
                    <Image src={project.image} alt="Project Image" />
                    <Image src={project.image} alt="Project Image Hover" />
                  </Link>
                </div>
                <div className="content-box">
                  <div className="inner-box">
                    <div className="content">
                      <div className="sub-title">{project.category}</div>
                      <h4 className="title">
                        <Link href="/page-project-details">
                          {project.title.split("\n").map((line, i) => (
                            <span key={i}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </Link>
                      </h4>
                    </div>
                    <Link href="/page-project-details" className="icon">
                      <i className="fa-light fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div
            className="btn-box col-lg-12 text-center wow fadeInUp"
            data-wow-delay="650ms">
            <Link href="/page-project-details" className="theme-btn btn-style-two">
              <span className="btn-arrow-left">
                <i className="far fa-chevron-right"></i>
              </span>
              <span className="btn-title"> View All Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSectionH1;
