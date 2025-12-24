"use client";
import Link from "next/link";
import Image from "next/image";

const teamData = [
  {
    id: 1,
    name: "Wade Warren",
    designation: "UX Designer, Research",
    image: "/images/resource/team-h1-1.jpg",
    socials: ["facebook", "twitter", "instagram"],
  },
  {
    id: 2,
    name: "Leslie Alexander",
    designation: "UX Designer, Research",
    image: "/images/resource/team-h1-2.jpg",
    socials: ["facebook", "twitter", "instagram"],
  },
  {
    id: 3,
    name: "Jenny Wilson",
    designation: "UX Designer, Research",
    image: "/images/resource/team-h1-3.jpg",
    socials: ["facebook", "twitter", "instagram"],
  },
  {
    id: 4,
    name: "Wade Warren",
    designation: "UX Designer, Research",
    image: "/images/resource/team-h1-3.jpg",
    socials: ["facebook", "twitter", "instagram"],
  },
  {
    id: 5,
    name: "Leslie Alexander",
    designation: "UX Designer, Research",
    image: "/images/resource/team-h1-2.jpg",
    socials: ["facebook", "twitter", "instagram"],
  },
  {
    id: 6,
    name: "Jenny Wilson",
    designation: "UX Designer, Research",
    image: "/images/resource/team-h1-1.jpg",
    socials: ["facebook", "twitter", "instagram"],
  },
];

const TeamSectionH1 = () => {
  return (
    <section className="team-section-h1 pt-100 pb-70">
      <div className="auto-container">
        <div className="row">
          {teamData.map((member) => (
            <div key={member.id} className="team-block-h1 col-xxl-4 col-md-6">
              <div className="inner-block mb-30">
                <div className="image">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={420}
                    height={500}
                  />
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={420}
                    height={500}
                  />
                </div>
                <svg
                  className="shape-style1"
                  width="270"
                  height="482"
                  viewBox="0 0 270 482"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0 0H177.857L270 255.929H192.857L257.143 482L34.2857 170.619H113.571L0 0Z"
                    fill="black"
                    fillOpacity="0.1"
                  ></path>
                </svg>
                <div className="content-box">
                  <div className="inner-box">
                    <div className="author-info">
                      <h4 className="name">{member.name}</h4>
                      <div className="designation">{member.designation}</div>
                    </div>
                    <div className="socials">
                      <i className="fa fa-plus"></i>
                      <ul className="social-links">
                        {member.socials.map((social) => (
                          <li key={social}>
                            <Link
                              aria-label={social}
                              href="#">
                              <i className={`fab fa-${social}`}></i>
                            </Link>
                          </li>
                        ))}
                      </ul>
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

export default TeamSectionH1;
