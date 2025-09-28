import React from "react";
import Button from "../UI/Button";
import "./SectionHeader.scss";
import { Link } from "react-router-dom";

const SectionHeader = ({ title, btn }) => {
  return (
    <div className="sectionHeader__content-header">
      <h2 className="sectionHeader__content-title"> {title} </h2>
      <div className="sectionHeader__content-buttons">
        {btn && (
          <Link to="/halloffame">
            <Button className="button--purple">See All</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
