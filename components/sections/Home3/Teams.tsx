"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const teamMembers = [
  {
    name: "Ronald Richards",
    role: "CEO & Founder",
    image: "/images/resource/team2-1.jpg",
    delay: "0ms",
  },
  {
    name: "Wade Warren",
    role: "CEO & Founder",
    image: "/images/resource/team2-2.jpg",
    delay: "200ms",
  },
  {
    name: "Russel Haipner",
    role: "CEO & Founder",
    image: "/images/resource/team2-3.jpg",
    delay: "400ms",
  },
  {
    name: "Robert Grodge",
    role: "CEO & Founder",
    image: "/images/resource/team2-4.jpg",
    delay: "600ms",
  },
];

const TeamSectionH3 = ({ className = "" }) => {
  return (
    <section className={`team-section-h3 ${className}`}>
      <div className="shape-1">
        <Image
          src="/images/icons/team-h3-1.png"
          alt="Team Shape"
          width={200}
          height={200}
        />
      </div>
      <div className="auto-container">
        <div className="sec-title-h1 text-center">
          <h6 className="sub-title">Our Team</h6>
          <h2 className="title">
            What Success Looks From <br /> The Back
          </h2>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-block-h3 col-lg-3 col-md-6 col-sm-6"
              data-wow-delay={member.delay}>
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <Link href="/page-team-details">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={300}
                        height={350}
                      />
                    </Link>
                  </figure>
                </div>
                <div className="content-box">
                  <h4 className="name">
                    <Link href="/page-team-details">{member.name}</Link>
                  </h4>
                  <div className="designation">{member.role}</div>
                  <div className="icon-box">
                    <span className="icon share-icon fal fa-share-alt"></span>
                    <div className="social-links">
                      <Link href="/">
                        <i className="fab fa-instagram"></i>
                      </Link>
                      <Link href="/">
                        <i className="fab fa-pinterest-p"></i>
                      </Link>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
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

export default TeamSectionH3;
