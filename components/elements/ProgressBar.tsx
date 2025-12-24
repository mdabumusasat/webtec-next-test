"use client";

import React, { useEffect, useState } from "react";

interface ProgressBarProps {
  label?: string;
  percentage: number; // e.g. 90
  duration?: number; // ms
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  label = "Skill",
  percentage,
  duration = 3000,
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const intervalTime = 30;
    const step = Math.ceil(percentage / (duration / intervalTime));

    const interval = setInterval(() => {
      start += step;
      if (start >= percentage) {
        setProgress(percentage);
        clearInterval(interval);
      } else {
        setProgress(start);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [percentage, duration]);

  return (
    <div className="bar">
      <div
        className="bar-inner count-bar"
        style={{ width: `${progress}%` }}
      >
        <div className="count-text">{progress}%</div>
      </div>
    </div>
  );
};

export default ProgressBar;
