import { useEffect, useState } from "react";

export default function CirculDiagram({ percent }) {
  const [radius, setTadius] = useState(65);

  useEffect(() => {
    const handleResize = () => {
      const newRadius = window.innerWidth < 1393 ? 35 : radius;
      setTadius(newRadius);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const circumference = 2 * Math.PI * radius;

  const setProgress = (percent) => {
    const offset = circumference - (percent / 100) * circumference;
    return -offset;
  };

  return (
    <div className="statistickPage__diagrams-contentCircles">
      <svg className="statistickPage__diagrams-ring" width="160" height="160">
        <circle
          className="statistickPage__diagrams-circleBG inside"
          strokeWidth="30"
          cx="80"
          cy="80"
          r="79.5"
          fill="transparent"
          stroke="#985edd"
        />
        <circle
          className="statistickPage__diagrams-circleBG outside"
          strokeWidth="30"
          cx="80"
          cy="80"
          r="50"
          fill="transparent"
          stroke="#985edd"
        />
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="20" result="blur" />
            <feFlood floodColor="white" result="glowColor" />
            <feComposite
              in="glowColor"
              in2="blur"
              operator="in"
              result="softGlow_colored"
            />
            <feMerge>
              <feMergeNode in="softGlow_colored" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle
          className="statistickPage__diagrams-circle"
          stroke="white"
          strokeWidth="30"
          cx="80"
          cy="80"
          r={radius}
          fill="transparent"
          style={{
            strokeDasharray: `${circumference} ${circumference}`,
            strokeDashoffset: setProgress(percent),
            transformOrigin: "center",
            transform: "rotate(270deg)",
            transition: "stroke-dashoffset 0.3s",
            filter: "url(#glow)",
            boxShadow: "0px 4px 60px 0px rgba(248, 242, 255, 0.6)",
          }}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          className="statistickPage__diagrams-circleText"
        >
          {percent}%
        </text>
      </svg>
    </div>
  );
}
