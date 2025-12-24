"use client";
import React, { useState } from "react";
import Link from "next/link";

const ProjectSectionH2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      title: "Future Management Development",
      category: "Development",
      image: "/images/resource/project-h2-1.jpg",
    },
    {
      title: "Digital Marketing Agency Growth",
      category: "Design",
      image: "/images/resource/project-h2-2.jpg",
    },
    {
      title: "SEO Marketing Result Growth in Website",
      category: "Technology",
      image: "/images/resource/project-h2-3.jpg",
    },
  ];

  return (
    <section className="project-section-h2">
      <div className="auto-container">
        <div className="sec-title-h2">
          <div className="left-box">
            <h6 className="sub-title">Selected works</h6>
            <h2 className="title">Showcasing Your Projects</h2>
          </div>
          <div className="right-box">
            <Link href="/page-projects" className="theme-btn btn-style-one">
              <span className="btn-arrow-left">
                <i className="far fa-chevron-right"></i>
              </span>
              <span className="btn-title">See More Projects</span>
            </Link>
          </div>
        </div>

        <div className="project-h2_inner-container">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-block ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              style={{ cursor: "pointer" }}
            >
              <div className="inner-block">
                <div className="row g-0">
                  <div className="content-box col-lg-4">
                    <div className="inner-box">
                      <div className="content">
                        <h4 className="title">
                          <Link href="/page-project-details">
                            {project.title}
                          </Link>
                        </h4>
                        <div className="catagories">{project.category}</div>
                      </div>

                      <Link
                        href="/page-project-details"
                        className="theme-btn btn-style-two w-auto"
                      >
                        <span className="btn-arrow-left">
                          <i className="far fa-chevron-right"></i>
                        </span>
                        <span className="btn-title">Read More</span>
                      </Link>
                    </div>
                  </div>

                  <div className="image-box col-lg-8">
                    <div className="image">
                      <img src={project.image} alt="" />
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

export default ProjectSectionH2;
