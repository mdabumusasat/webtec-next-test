"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for actual document load state
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      const handleLoad = () => {
        setLoading(false);
      };

      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!loading) return null;

  return (
    <div className="preloader"></div>
  );
}

