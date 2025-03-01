import React, { useEffect, useState } from "react";
import ScrollingList from "./scrollingListTable";
import MobileTable from "./mobileTable";
import tableInfo from "../tableInfo";
import "./Table__StatisticsP.scss";

const index = () => {
  const [showMobiletable, setShowMobiletable] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 767) {
      setShowMobiletable(true);
    } else {
      setShowMobiletable(false);
    }
  }, [windowWidth]);

  return (
    <section className="table">
      <h2 className="table__title">Transactions</h2>
      {showMobiletable ? (
        <div className="table__content">
          <ScrollingList items={tableInfo} />
        </div>
      ) : (
        <MobileTable item={tableInfo} />
      )}
    </section>
  );
};

export default index;
