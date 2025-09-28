import React from "react";
import "./inputInfo.scss";

const index = ({
  title,
  descr,
  type,
  width,
  height,
  img,
  children,
  value,
  setValue,
}) => {
  return (
    <div>
      <span className="inputInfo-inputTitle">
        {title}
        {children}
      </span>
      <div className="inputInfo-select">
        <input
          type={type}
          placeholder={descr}
          className="inputInfo-input"
          value={value}
          onChange={setValue}
          required
        />
        <img src={img} alt="Scenery image" width={width} height={height} />
      </div>
    </div>
  );
};

export default index;
