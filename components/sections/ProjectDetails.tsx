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
];

function ProjectDetails(){
	return (
		<>
		<section className="project-details pt-120">
			<div className="container">
				<div className="row">
					<div className="col-xl-12">
						<div className="project-details__top">
							<div className="project-details__img">
								<Image
								src="/images/resource/project-details.jpg"
								alt="Project Details"
								width={1200}
								height={600}
								priority
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="project-details__content">
					<div className="row">
						<div className="col-xl-8 col-lg-8">
							<div className="project-details__content-left">
								<h3 className="mb-4">
								<strong>Here to Know About This Project</strong>
								</h3>

								<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit.
								Asperiores, repellat aliquid. Est corrupti officiis
								dignissimos deserunt sunt minima iusto quia saepe tempora
								consectetur dolor deleniti voluptatum et, eos vitae pariatur
								molestiae odit quos enim voluptas nobis ullam voluptatem cum
								iste.
								</p>

								<p className="mb-5">
								Beyond more stoic this along goodness hey this this wow
								manatee mongoose one as since a far flustered impressive
								manifest Lorem ipsum dolor sit amet, consectetur adipisicing
								elit. Nostrum illo ea ad, nam quisquam optio vel tempora,
								minus placeat, ut nisi quam quos laboriosam eos quibusdam cum
								atque suscipit quod dignissimos magni doloribus facere eius
								soluta possimus.
								</p>
							</div>
						</div>
						<div className="col-xl-4 col-lg-4">
							<div className="project-details__content-right">
								<div className="project-details__details-box">
									<div className="project-details__bg-shape"></div>
									<ul className="list-unstyled project-details__details-list">
										<li>
										<p className="project-details__client">Date</p>
										<h4 className="project-details__name">
											10 January, 2025
										</h4>
										</li>

										<li>
										<p className="project-details__client">Client</p>
										<h4 className="project-details__name">
											Kodesolution Ltd
										</h4>
										</li>

										<li>
										<p className="project-details__client">Website</p>
										<h4 className="project-details__name">
											<a href="https://www.domain.com" target="_blank">
											www.domain.com
											</a>
										</h4>
										</li>

										<li>
										<p className="project-details__client">Location</p>
										<h4 className="project-details__name">
											New York, USA
										</h4>
										</li>

										<li>
										<p className="project-details__client">Value</p>
										<h4 className="project-details__name">$12,367</h4>
										</li>

										<li>
										<div className="project-details__social">
											<a href="#" aria-label="Twitter">
											<i className="fa fa-x"></i>
											</a>
											<a href="#" aria-label="Facebook">
											<i className="fab fa-facebook"></i>
											</a>
											<a href="#" aria-label="Pinterest">
											<i className="fab fa-pinterest-p"></i>
											</a>
											<a href="#" aria-label="Instagram">
											<i className="fab fa-instagram"></i>
											</a>
										</div>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xl-12">
						<div className="project-details__pagination-box">
							<ul className="project-details__pagination list-unstyled clearfix">
								<li className="next">
								<div className="icon">
									<Link href="#" aria-label="Previous Project">
									<i className="far fa-arrow-left-long"></i>
									</Link>
								</div>
								<div className="content">Previous</div>
								</li>
								<li className="count">
									<Link href="#"></Link>
								</li>
								<li className="count">
									<Link href="#"></Link>
								</li>
								<li className="count">
									<Link href="#"></Link>
								</li>
								<li className="count">
									<Link href="#"></Link>
								</li>
								<li className="previous">
								<div className="content">Next</div>
								<div className="icon">
									<Link href="#" aria-label="Next Project">
									<i className="far fa-arrow-right-long"></i>
									</Link>
								</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>

		<section className="project-section-h1 pt-100 pb-70">
			<div className="outer-box">
				<div className="sec-title-h1 text-center">
					<h6 className="sub-title">Selected works</h6>
					<h2 className="title char-animation">
						Showcasing Your Projects
					</h2>
				</div>
				<div className="auto-container">
					<div className="row">
						{projects.map((project, index) => (
						<div
							key={index}
							className="project-block-h1 col-xl-4 col-md-6 wow fadeInUp"
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
											<div className="sub-title">
											{project.category}
											</div>
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
		</>
	);
};

export default ProjectDetails;