"use client";

import { useEffect, useState, ReactNode, useRef } from "react";
import BackToTop from "../elements/BackToTop";
import Footer from "./Footer";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Header3 from "./Header3";


type HeaderStyleType = "two" | "three";
type FooterStyleType = "two" | "three";

interface LayoutProps {
  children: ReactNode;
  HeaderStyle?: HeaderStyleType;
  FooterStyle?: FooterStyleType;
  darkMode?: string | number;
  menuType?: "single" | "default";
  wrapperClass?: string;
}

const Layout = ({
  children,
  HeaderStyle,
  FooterStyle,
  wrapperClass,
}: LayoutProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const bodyRef = useRef<HTMLBodyElement | null>(null);

  // Initialize body ref on mount
  useEffect(() => {
    bodyRef.current = document.body;
  }, []);

  // Sync mobile menu state with body class
  useEffect(() => {
    if (bodyRef.current) {
      if (isMobileMenuVisible) {
        bodyRef.current.classList.add("mobile-menu-visible");
      } else {
        bodyRef.current.classList.remove("mobile-menu-visible");
      }
    }
  }, [isMobileMenuVisible]);

  // Sync search popup state with body class
  useEffect(() => {
    if (bodyRef.current) {
      if (isSearchOpen) {
        bodyRef.current.classList.add("search-popup-visible");
      } else {
        bodyRef.current.classList.remove("search-popup-visible");
      }
    }
  }, [isSearchOpen]);

  const handleOpen = () => setIsMobileMenuVisible(true);
  const handleRemove = () => setIsMobileMenuVisible(false);

  const handleToggle = () => {
    setIsSearchOpen((prev) => !prev);
  };

  useEffect(() => {
    const onScroll = () => setScroll(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerProps = {
    handleOpen,
    handleRemove,
    searchToggle: isSearchOpen,
    handleToggle,
    scroll,
  };

  const headerComponents: Record<HeaderStyleType, ReactNode> = {
    two: <Header2 {...headerProps} />,
    three: <Header3 {...headerProps} />,
  };

  return (
    <>
      <div id="top" className={`page-wrapper ${wrapperClass || ""}`}>
        {!HeaderStyle ? (
          <Header1 {...headerProps} />
        ) : (
          headerComponents[HeaderStyle] || <Header1 {...headerProps} />
        )}

        {children}

        {!FooterStyle && <Footer />}
        {FooterStyle === "two" && <Footer2 />}
        {FooterStyle === "three" && <Footer3 />}
      </div>
      <BackToTop />
    </>
  );
};

export default Layout;
