"use client";

import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    category: "Development",
    title: "Future Management \Development",
    image: "/images/resource/project-1-1.jpg",
    link: "/page-project-details",
  },
  {
    category: "Design",
    title: "Digital Marketing \Agency Growth",
    image: "/images/resource/project-1-2.jpg",
    link: "/page-project-details",
  },
  {
    category: "Technology",
    title: "SEO Marketing Result \Growth in Website",
    image: "/images/resource/project-1-3.jpg",
    link: "/page-project-details",
  },
];

const ProjectSection = () => {
  return (
    <div className="ks-project-area">
      <div className="anim-icon tm-gsap-animate-circle">
        <Image
          src="/images/icons/project-1-1.png"
          alt="Project Icon"
          width={120}
          height={120}
        />
      </div>
      <div className="auto-container">
        <div className="row">
          <div className="col-12">
            <div className="sec-title-h1">
              <h6 className="sub-title">Selected works</h6>
              <h2 className="title char-animation">
                Showcasing your <br /> projects
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="ks-project-item ks-project-panel"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}>
                <div className="d-flex">
                  <div className="ks-project-content-wrap">
                    <div className="ks-project-arrow">
                      <Link href={project.link}>
                        <svg
                          width="16"
                          height="22"
                          viewBox="0 0 32 32"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill="currentColor"
                            d="M32 1.363v20.7c0 .753-.61 1.364-1.363 1.364-.752 0-1.363-.611-1.363-1.364V4.653L2.327 31.601c-.267.267-.615.4-.964.4-.349 0-.697-.133-.963-.4-.532-.532-.532-1.395 0-1.928L27.347 2.726H9.937c-.752 0-1.363-.61-1.363-1.363s.611-1.363 1.363-1.363H30.637c.752 0 1.363.611 1.363 1.363Z"
                          />
                        </svg>
                      </Link>
                    </div>
                    <div className="ks-project-content">
                      <span>{project.category}</span>
                      <h4 className="ks-project-title">
                        <Link className="border-line" href={project.link}>
                          {project.title.split("\n").map((line, i) => (
                            <span key={i}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </Link>
                      </h4>
                      <p>
                        It is a long established fact that a reader will be <br />
                        distracted by the readable content simply free <br />
                        lorem ipsum text.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
