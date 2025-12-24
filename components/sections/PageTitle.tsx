import React from 'react';
import Link from 'next/link';

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <>
      <section className="page-title" style={{ backgroundImage: 'url(images/background/page-title.jpg)' }}>
        <div className="auto-container">
          <div className="title-outer">
            <h1 className="title">{title}</h1>
            <ul className="page-breadcrumb">
              <li><Link href="#">Home</Link></li>
              <li><Link href="#">Pages</Link></li>
              <li>{title}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageTitle;