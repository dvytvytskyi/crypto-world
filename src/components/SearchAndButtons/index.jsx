import React from "react";
import SearchFull from "../DataHandlers/SearchFull";
import Button from "../UI/Button";
import "./searchAndButtons.scss";

const index = ({ search, handeSearch, sort, handleSort }) => {
  return (
    <ul className="searchAndButtons__search-list">
      <SearchFull search={search} handleSearch={handeSearch} />
      <SearchFull
        search={search}
        handleSearch={handeSearch}
        placeholder="Search"
      />
      <li className="searchAndButtons__search-item searchAndButtons__search-item--tablet">
        <Button
          className={
            sort === "biggest" ? "button--purple" : "button--gradientBorder"
          }
          handler={() => handleSort("biggest")}
        >
          <img
            src="/assets/UI/burgerAndArrow.svg"
            alt="Button arrow"
            width={20}
            height={17}
          />
          Biggest
        </Button>
      </li>
      <li className="searchAndButtons__search-item searchAndButtons__search-item--tablet">
        <Button
          className={
            sort === "newest" ? "button--purple" : "button--gradientBorder"
          }
          handler={() => handleSort("newest")}
        >
          <img
            src="/assets/UI/clock.svg"
            alt="Button clock"
            width={20}
            height={20}
          />
          Newest
        </Button>
      </li>
      <li className="searchAndButtons__search-item searchAndButtons__search-item--phone">
        <Button
          className={
            sort === "biggest" ? "button--purple" : "button--gradientBorder"
          }
          handler={() => handleSort("biggest")}
        >
          <img
            src="/assets/UI/burgerAndArrow.svg"
            alt="Button arrow"
            width={20}
            height={17}
          />
        </Button>
      </li>
      <li className="searchAndButtons__search-item searchAndButtons__search-item--phone">
        <Button
          className={
            sort === "newest" ? "button--purple" : "button--gradientBorder"
          }
          handler={() => handleSort("newest")}
        >
          <img
            src="/assets/UI/clock.svg"
            alt="Button clock"
            width={20}
            height={20}
          />
        </Button>
      </li>
    </ul>
  );
};

export default index;
