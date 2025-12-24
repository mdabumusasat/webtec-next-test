"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    image: "/images/resource/project-h1-1.jpg",
    category: "Development",
    title: "Future Management Development",
    delay: "100ms",
  },
  {
    image: "/images/resource/project-h1-2.jpg",
    category: "Design",
    title: "Digital Marketing Agency Growth",
    delay: "200ms",
  },
  {
    image: "/images/resource/project-h1-3.jpg",
    category: "Technology",
    title: "SEO Marketing Result Growth in Website",
    delay: "300ms",
  },
  {
    image: "/images/resource/project-h1-4.jpg",
    category: "Security",
    title: "Social Marketing",
    delay: "400ms",
  },
  {
    image: "/images/resource/project-h1-5.jpg",
    category: "Development",
    title: "Web design",
    delay: "500ms",
  },
  {
    image: "/images/resource/project-h1-6.jpg",
    category: "Technology",
    title: "Web Marketing",
    delay: "600ms",
  },
];

const ProjectSectionH1 = () => {
  return (
    <section className="project-section-h1 pt-100 pb-70">
      <div className="outer-box">
        <div className="auto-container">
          <div className="row">
            {projects.map((project, index) => (
              <div
                key={index}
                className="project-block-h1 col-xxl-4 col-md-6 wow fadeInUp"
                data-wow-delay={project.delay}>
                <div className="inner-block">
                  <div className="image">
                    <Link href="/page-project-details">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={320}
                      />
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={320}
                      />
                    </Link>
                  </div>
                  <div className="content-box">
                    <div className="inner-box">
                      <div className="content">
                        <div className="sub-title">{project.category}</div>
                        <h4 className="title">
                          <Link href="/page-project-details">
                            {project.title.split(" ").slice(0, 3).join(" ")}
                            <br />
                            {project.title.split(" ").slice(3).join(" ")}
                          </Link>
                        </h4>
                      </div>
                      <Link
                        href="/page-project-details"
                        className="icon"
                        aria-label="Project Details">
                        <i className="fa-light fa-arrow-right-long"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSectionH1;
