"use client";
import React, {useState} from "react";
import ModalVideo from 'react-modal-video';
import Image from "next/image";
import Link from "next/link";

const BannerSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="banner-section-h2">
        <div className="shape-1">
          <Image
            data-speed="1.2"
            src="/images/icons/home2-shape2.png"
            alt="shape"
            width={100}
            height={100}
          />
        </div>
        <div className="shape-2">
          <Image
            data-speed="1.2"
            src="/images/icons/home2-shape3.png"
            alt="shape"
            width={100}
            height={100}
          />
        </div>
        <div className="outer-container">
          <div className="row align-items-center g-4">
            <div className="col-xl-6 col-lg-7 mx-auto mx-xl-0">
              <div className="hero-content text-center text-xl-start">
                <h6 className="sub-title">SOLUTIONS FOR Creative Products</h6>
                <h2 className="title wow fadeInUp" data-wow-delay="200ms">
                  Where <span>Quality Meets</span> Creativity
                </h2>
                <div
                  className="text mx-auto mx-xl-0 wow fadeInUp"
                  data-wow-delay="400ms">
                  Highlights the partnership between the client’s vision and the
                  agency’s technical and creative skills. Proin efficitur, mauris
                  vel condimentum pulvinar
                </div>
                <div
                  className="d-sm-flex align-items-center justify-content-center justify-content-xl-start wow fadeInUp"
                  data-wow-delay="600ms">
                  <div className="hero-button d-sm-flex">
                    <Link href="/page-about" className="theme-btn btn-style-one">
                      <span className="btn-arrow-left">
                        <i className="far fa-chevron-right"></i>
                      </span>
                      <span className="btn-title"> Read More</span>
                    </Link>
                    <div className="video-btn"><a onClick={() => setOpen(true)} data-fancybox="gallery" data-caption="" className="icon p-relative popup-video"><i className="fa-sharp fa-solid fa-play"></i></a>Watch Video</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div
                className="hero-img-box d-flex wow fadeInUp justify-content-center justify-content-xl-start"
                data-wow-delay="400ms">
                <div className="img-1">
                  <Image
                    src="/images/banner/home2-banner-1.jpg"
                    alt="Banner 1"
                    width={400}
                    height={400}/>
                </div>
                <div className="ms-5">
                  <div className="img-2 mb-20">
                    <Image
                      src="/images/banner/home2-banner-2.jpg"
                      alt="Banner 2"
                      width={400}
                      height={200}/>
                  </div>
                  <div className="img-3">
                    <Image
                      src="/images/banner/home2-banner-3.jpg"
                      alt="Banner 3"
                      width={400}
                      height={200}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId="YOUR_VIDEO_ID"
        onClose={() => setOpen(false)}
        youtube={{
          autoplay: 1,
        }}
      />

    </>
  );
};

export default BannerSection;
