"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const BlogDetails = () => {
  return (
    <section className="blog-details pt-120 pb-100">
        <div className="container">
            <div className="row">
                <div className="col-xl-8 col-lg-7">
                    <div className="blog-details__left">
                        <div className="blog-details__img">
                            <Image
                            src="/images/resource/news-details.jpg"
                            alt="Blog Details"
                            width={800}
                            height={450}
                            />
                            <div className="blog-details__date">
                            <span className="day">28</span>
                            <span className="month">Aug</span>
                            </div>
                        </div>
                        <div className="blog-details__content">
                            <ul className="list-unstyled blog-details__meta">
                            <li>
                                <Link href="/news-details">
                                <i className="fas fa-user-circle"></i> Admin
                                </Link>
                            </li>
                            <li>
                                <Link href="/news-details">
                                <i className="fas fa-comments"></i> 02 Comments
                                </Link>
                            </li>
                            </ul>
                            <h3 className="blog-details__title">
                            Delivering the best web design agency
                            </h3>
                            <p className="blog-details__text-2">
                                Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
                            </p>
                            <p className="blog-details__text-2">
                                Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
                            </p>
                            <p className="blog-details__text-2">
                                Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
                            </p>
                        </div>
                        <div className="blog-details__bottom">
                            <p className="blog-details__tags">
                            <span>Tags</span>
                            <Link href="#">Business</Link>
                            <Link href="#">Agency</Link>
                            </p>
                            <div className="blog-details__social-list">
                            <Link href="#"><i className="fa fa-x"></i></Link>
                            <Link href="#"><i className="fab fa-facebook"></i></Link>
                            <Link href="#"><i className="fab fa-pinterest-p"></i></Link>
                            <Link href="#"><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                        <div className="nav-links">
                            <div className="prev">
                            <Link href="#" rel="prev">
                                Bring to the table win-win survival strategies
                            </Link>
                            </div>
                            <div className="next">
                            <Link href="#" rel="next">
                                How to lead a healthy & well-balanced life
                            </Link>
                            </div>
                        </div>
                        <div className="comment-one">
                            <h3 className="comment-one__title">2 Comments</h3>

                            {[
                            {
                                img: "/images/resource/thumb-1.jpg",
                                name: "Kevin Martin",
                            },
                            {
                                img: "/images/resource/thumb-2.jpg",
                                name: "Sarah Albert",
                            },
                            ].map((item, i) => (
                            <div className="comment-one__single" key={i}>
                                <div className="comment-one__image">
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    width={70}
                                    height={70}
                                />
                                </div>
                                <div className="comment-one__content">
                                <h3>{item.name}</h3>
                                <p>
                                    Mauris non dignissim purus, ac commodo diam. Donec sit amet lacinia nulla. Aliquam quis purus in justo pulvinar tempor. Aliquam tellus nulla, sollicitudin at euismod.
                                </p>
                                <Link
                                    href="#"
                                    className="theme-btn btn-style-one comment-one__btn">
                                    <span className="btn-title">Reply</span>
                                </Link>
                                </div>
                            </div>
                            ))}
                            <div className="comment-form">
                                <h3 className="comment-form__title">Leave a Comment</h3>
                                <form>
                                    <div className="row">
                                    <div className="col-sm-6">
                                        <input
                                        type="text"
                                        className="form-control mb-3"
                                        placeholder="Enter Name"
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <input
                                        type="email"
                                        className="form-control mb-3"
                                        placeholder="Enter Email"
                                        />
                                    </div>
                                    </div>
                                    <textarea
                                    className="form-control mb-3"
                                    rows={5}
                                    placeholder="Enter Message"
                                    />
                                    <button className="theme-btn btn-style-two" type="submit">
                                    <span className="btn-arrow-left">
                                        <i className="far fa-chevron-right"></i>
                                    </span>
                                    <span className="btn-title"> Submit Comment</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-5">
                    <div className="sidebar__single sidebar__search">
                        <form className="sidebar__search-form">
                        <input type="search" placeholder="Search here" />
                        <button type="submit">
                            <i className="lnr-icon-search"></i>
                        </button>
                        </form>
                    </div>
                    <div className="sidebar__single sidebar__post">
                        <h3 className="sidebar__title">Latest Posts</h3>
                        <ul className="sidebar__post-list list-unstyled">
                        {["blog2-1.jpg", "blog2-2.jpg", "blog2-3.jpg"].map(
                            (img, i) => (
                            <li key={i}>
                                <div className="sidebar__post-image">
                                    <Image
                                        src={`/images/resource/${img}`}
                                        alt="Post"
                                        width={80}
                                        height={80}
                                    />
                                </div>
                                <div className="sidebar__post-content">
                                    <h3>
                                        <span className="sidebar__post-content-meta">
                                        <i className="fas fa-user-circle"></i> Admin
                                        </span>
                                        <Link href="#">Top crypto exchange influencers</Link>
                                    </h3>
                                </div>
                            </li>
                            )
                        )}
                        </ul>
                    </div>
                    <div className="sidebar__single sidebar__category">
                        <h3 className="sidebar__title">Categories</h3>
                        <ul className="sidebar__category-list list-unstyled">
                            <li><Link href="news-details.html">Business<span
                                className="icon-right-arrow"></span></Link> </li>
                            <li className="active"><Link href="news-details.html">Digital Agency<span
                                className="icon-right-arrow"></span></Link></li>
                            <li><Link href="news-details.html">Introductions<span
                                className="icon-right-arrow"></span></Link> </li>
                            <li><Link href="news-details.html">New Technologies<span
                                className="icon-right-arrow"></span></Link> </li>
                            <li><Link href="news-details.html">Parallax Effects<span
                                className="icon-right-arrow"></span></Link> </li>
                            <li><Link href="news-details.html">Web Development<span
                                className="icon-right-arrow"></span></Link> </li>
                        </ul>
                    </div>
                    <div className="sidebar__single sidebar__tags">
                        <h3 className="sidebar__title">Tags</h3>
                        <div className="sidebar__tags-list"> <Link href="#">Consulting</Link> <Link href="#">Agency</Link> <Link href="#">Business</Link> <Link href="#">Digital</Link> <Link href="#">Experience</Link> <Link href="#">Technology</Link> </div>
                    </div>
                    <div className="sidebar__single sidebar__comments">
                        <h3 className="sidebar__title">Recent Comments</h3>
                        <ul className="sidebar__comments-list list-unstyled">
                            <li>
                                <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                                <div className="sidebar__comments-text-box">
                                    <p>A wordpress commenter on <br/>
                                        launch new mobile app
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                                <div className="sidebar__comments-text-box">
                                    <p> <span>John Doe</span> on template:</p>
                                    <h5>comments</h5>
                                </div>
                            </li>
                            <li>
                                <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                                <div className="sidebar__comments-text-box">
                                    <p>A wordpress commenter on <br/>
                                        launch new mobile app
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="sidebar__comments-icon"> <i className="fas fa-comments"></i> </div>
                                <div className="sidebar__comments-text-box">
                                    <p> <span>John Doe</span> on template:</p>
                                    <h5>comments</h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default BlogDetails;
