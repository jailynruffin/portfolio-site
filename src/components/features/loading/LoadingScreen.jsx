import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";

export default function LoadingScreen({ onFinish }) {
  const [showGlimmer, setShowGlimmer] = useState(false);

  useEffect(() => {
    const fillTimer = setTimeout(() => setShowGlimmer(true), 2000);
    const endTimer = setTimeout(() => onFinish(), 3200); 

    return () => {
      clearTimeout(fillTimer);
      clearTimeout(endTimer);
    };
  }, [onFinish]);

  return (
    <div className="loading-container">
      <svg
        className="heart-svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <clipPath id="heartClip">
            <path
              d="M50 91s-1-.6-1.4-.9C26 72 10 58.3 10 39.6 10 25 22 14 35.2 14c6.4 0 12.3 2.9 16.4 7.6C55.5 16.9 61.4 14 67.8 14 81 14 93 25 93 39.6c0 18.7-16 32.4-38.6 50.5-.4.3-1.4.9-1.4.9z"
            />
          </clipPath>

          <linearGradient id="pinkGradient" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stopColor="#ff69b4" />
            <stop offset="100%" stopColor="#ffc1dc" />
          </linearGradient>

          <linearGradient id="glimmerGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        {/* Fill animation inside clipped heart */}
        <rect
          className="heart-fill"
          clipPath="url(#heartClip)"
          x="0"
          y="100"
          width="100"
          height="100"
        />

        {/* Heart outline */}
        <path
          d="M50 91s-1-.6-1.4-.9C26 72 10 58.3 10 39.6 10 25 22 14 35.2 14c6.4 0 12.3 2.9 16.4 7.6C55.5 16.9 61.4 14 67.8 14 81 14 93 25 93 39.6c0 18.7-16 32.4-38.6 50.5-.4.3-1.4.9-1.4.9z"
          fill="none"
          stroke="hotpink"
          strokeWidth="3"
        />

        {/* Glimmer effect */}
        {showGlimmer && (
          <rect className="glimmer" x="-100" y="0" width="100" height="100" />
        )}
      </svg>
    </div>
  );
}
