import React from "react";
import "./header__StepsP.scss";

const index = ({ title, descr }) => {
  return (
    <section className="steps__header">
      <h1>{title}</h1>
      {!descr && (
        <h4 className="steps__header-descr">
          Become the <span>owner</span> of Cyprus in <span>3 steps</span>
        </h4>
      )}
      {descr && (
        <h4 className="steps__header-descr">
          Own a Pixel, Shape the Virtual World
        </h4>
      )}
    </section>
  );
};

export default index;
