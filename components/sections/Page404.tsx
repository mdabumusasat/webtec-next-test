"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const NotFoundSection = () => {
  return (
    <section>
      <div className="container pt-120 pb-70">
        <div className="row">
          <div className="col-xl-12">
            <div className="error-page__inner">
              <div className="error-page__title-box">
                <Image
                  src="/images/resource/404.jpg"
                  alt="404 Page Not Found"
                  width={600}
                  height={400}
                  priority
                />
                <h3 className="error-page__sub-title">Page not found!</h3>
              </div>

              <p className="error-page__text">
                Sorry we can't find that page! The page you are looking <br />
                for was never existed.
              </p>

              <form
                className="error-page__form"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="error-page__form-input">
                  <input type="search" placeholder="Search here" />
                  <button type="submit">
                    <i className="fa-classic fa-light fa-magnifying-glass fa-fw"></i>
                  </button>
                </div>
              </form>

              <Link href="/" className="theme-btn btn-style-one">
                <span className="btn-arrow-left">
                  <i className="far fa-chevron-right"></i>
                </span>
                <span className="btn-title"> Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundSection;
