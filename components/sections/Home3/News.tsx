"use client";

import Image from "next/image";
import Link from "next/link";

const newsData = [
  {
    id: 1,
    image: "/images/resource/news-h3-1.jpg",
    author: "shadhin",
    category: "Technology",
    title: "The Power of Storytelling in Digital Branding",
  },
  {
    id: 2,
    image: "/images/resource/news-h3-2.jpg",
    author: "shadhin",
    category: "Web Design",
    title: "Why Your Brand Needs a Digital Agency in 2025",
  },
  {
    id: 3,
    image: "/images/resource/news-h3-3.jpg",
    author: "shadhin",
    category: "Agency",
    title: "Make a Marketing Strategy for your Small Business",
  },
];

const NewsSectionH3 = () => {
  return (
    <section className="news-section-h3">
      <div className="auto-container">
        <div className="sec-title-h1 text-center">
          <h6 className="sub-title">From the blog</h6>
          <h2 className="title">
            Check Out Latest News <br /> Update & Articles
          </h2>
        </div>
        <div className="row gx-4">
          {newsData.map((item) => (
            <div key={item.id} className="news-block-h3 col-xl-4 col-md-6">
              <div className="inner-block">
                <div className="images-box">
                  <div className="inner-box">
                    <div className="image">
                      <Link href="/news-details">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={420}
                          height={280}
                        />
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={420}
                          height={280}
                        />
                      </Link>
                    </div>
                    <Link href="/news-details" className="icon">
                      <i className="fas fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="content-box">
                  <div className="inner-box">
                    <div className="catagories">
                      By <span>{item.author}</span> {item.category}
                    </div>
                    <h4 className="title">
                      <Link href="/news-details">{item.title}</Link>
                    </h4>
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

export default NewsSectionH3;
