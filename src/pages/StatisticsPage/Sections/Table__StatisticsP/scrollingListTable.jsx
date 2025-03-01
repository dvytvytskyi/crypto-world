import React, { useEffect, useState } from "react";

const ScrollingListTable = ({ items }) => {
  const [scrollBlocked, setScrollBlocked] = useState(false);
  const [startIdx, setStartIdx] = useState(0);
  const [displayedItems, setDisplayedItems] = useState([]);

  useEffect(() => {
    if (items.length <= 9) {
      setScrollBlocked(true);
      setDisplayedItems(items);
    } else {
      setScrollBlocked(false);
      // Concatenate items to loop over them and show 9 at a time
      const concatenatedItems = items.concat(items.slice(0, 9));
      setDisplayedItems(concatenatedItems);
    }

    const interval = setInterval(() => {
      setStartIdx((prevStartIdx) => (prevStartIdx + 1) % items.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [items]);

  return (
    <table className="table__content-table scroll__content">
      <thead className="table__content-thead">
        <tr>
          <th className="table__content-head radiuslu">NAME</th>
          <th className="table__content-head">PRICE</th>
          <th className="table__content-head">PIXELS</th>
          <th className="table__content-head">TYPE</th>
          <th className="table__content-head">TRANSACTION</th>
          <th className="table__content-head radiusru">DATE & TIME</th>
        </tr>
      </thead>
      <tbody className="table__content-body">
        {/* Slice the displayedItems to show only 9 at a time */}
        {displayedItems.slice(startIdx, startIdx + 9).map((item, index) => (
          <tr
            className="table__content-tr scroll__content-item visible"
            key={index}
          >
            <td
              className={`table__content-descr ${
                index === 8 ? "radiusld" : ""
              }`}
            >
              {item.name}
            </td>
            <td className="table__content-descr">
              <div className="table__content-info">
                <img
                  src={item.img}
                  alt="Table image"
                  className="table__content-img"
                  width={20}
                  height={20}
                />
                <span className="table__content-price">{item.price}</span>
              </div>
            </td>
            <td className="table__content-descr">{item.pixels}</td>
            <td className="table__content-descr">{item.type}</td>
            <td className="table__content-descr transaction">
              {item.transaction}
            </td>
            <td
              className={`table__content-descr ${
                index === 8 ? "radiusrd" : ""
              }`}
            >
              {item.dateTime}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ScrollingListTable;
