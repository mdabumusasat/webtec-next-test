"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import team1 from "@/public/images/resource/team-h1-1.jpg";
import team2 from "@/public/images/resource/team-h1-2.jpg";
import team3 from "@/public/images/resource/team-h1-3.jpg";

const teamMembers = [
  {
    name: "Wade Warren",
    role: "UX Designer, Research",
    image: team1,
  },
  {
    name: "Leslie Alexander",
    role: "UX Designer, Research",
    image: team2,
  },
  {
    name: "Jenny Wilson",
    role: "UX Designer, Research",
    image: team3,
  },
];

const TeamSectionH1 = () => {
  return (
    <section className="team-section-h1">
      <div className="outer-box">
        <div className="sec-title-h1 white text-center">
          <h6 className="sub-title">Our Team</h6>
          <h2 className="title char-animation">
            The Geniuses Behind <br /> The Scenes
          </h2>
        </div>
        <div className="auto-container">
          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-block-h1 col-xl-4 col-md-6">
                <div className="inner-block">
                  <div className="image">
                    <Link href="/page-team">
                      <Image src={member.image} alt={member.name} />
                      <Image src={member.image} alt={`${member.name} Hover`} />
                    </Link>
                  </div>
                  <svg
                    className="shape-style1"
                    width="270"
                    height="482"
                    viewBox="0 0 270 482"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 0H177.857L270 255.929H192.857L257.143 482L34.2857 170.619H113.571L0 0Z"
                      fill="black"
                      fillOpacity="0.1"
                    />
                  </svg>
                  <div className="content-box">
                    <div className="inner-box">
                      <div className="author-info">
                        <h4 className="name">
                          <Link href="/page-team-details">
                            {member.name}
                          </Link>
                        </h4>
                        <div className="designation">{member.role}</div>
                      </div>
                      <div className="socials">
                        <i className="fa fa-plus"></i>
                        <ul className="social-links">
                          <li>
                            <a aria-label="facebook" href="#">
                              <i className="fab fa-facebook"></i>
                            </a>
                          </li>
                          <li>
                            <a aria-label="twitter" href="#">
                              <i className="fab fa-twitter"></i>
                            </a>
                          </li>
                          <li>
                            <a aria-label="instagram" href="#">
                              <i className="fab fa-instagram"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
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

export default TeamSectionH1;
