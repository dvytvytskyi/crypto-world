import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const index = ({ data }) => {
  const [radius, setRadius] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [cutOut, setCutOut] = useState("");
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
    },
    cutout: cutOut,
    radius: radius,
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (windowWidth >= 1440) {
      setRadius(262);
      setCutOut(150);
    }
    if (windowWidth < 1440 && windowWidth >= 768) {
      setRadius(150);
      setCutOut(90);
    }
    if (windowWidth < 768) {
      setRadius(90);
      setCutOut(60);
    }
  }, [windowWidth]);
  return (
    <div className="landDisrt__diagram">
      <div className="landDisrt__diagramShadowIn"></div>
      <div className="landDisrt__diagramShadowOut"></div>
      <Doughnut data={data} options={options} width={536} height={536} />
    </div>
  );
};

export default index;
