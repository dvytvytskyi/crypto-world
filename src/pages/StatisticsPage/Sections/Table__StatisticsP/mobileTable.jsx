import React, { useState, useEffect } from "react";

const mobileTable = ({ item }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);

  useEffect(() => {
    const handleSwipe = (event) => {
      const touchEndX = event.changedTouches[0].clientX;
      const deltaX = touchEndX - touchStartX;

      if (deltaX > 50 && currentIndex > 0) {
        setCurrentIndex((prevIndex) => prevIndex - 1);
      } else if (deltaX < -50 && currentIndex < item.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    };

    const tableContainer = document.querySelector(".phoneTable__container");

    const handleTouchStart = (event) => {
      setTouchStartX(event.touches[0].clientX);
    };

    const handleTouchEnd = (event) => {
      if (touchStartX !== null) {
        handleSwipe(event);
        setTouchStartX(null);
      }
    };

    tableContainer.addEventListener("touchstart", handleTouchStart);
    tableContainer.addEventListener("touchend", handleTouchEnd);

    return () => {
      tableContainer.removeEventListener("touchstart", handleTouchStart);
      tableContainer.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex, item.length, touchStartX]);

  return (
    <div className="phoneTable__container">
      <table className="phoneTable">
        <thead className="phoneTable__content-thead">
          <th className="phoneTable__content-head radiuslu">NAME</th>
          <th className="phoneTable__content-head">PRICE</th>
          <th className="phoneTable__content-head">PIXELS</th>
          <th className="phoneTable__content-head">TYPE</th>
          <th className="phoneTable__content-head">TRANSACTION</th>
          <th className="phoneTable__content-head radiusld">DATE & TIME</th>
        </thead>
        <tbody className="phoneTable__content-body">
          <tr className="phoneTable__content-tr">
            <td className="phoneTable__content-descr radiusru">
              {" "}
              {item[currentIndex].name}{" "}
            </td>
            <td className="phoneTable__content-descr">
              <div className="phoneTable__content-info">
                <img
                  src={item[currentIndex].img}
                  alt="Table image"
                  className="table__content-img"
                  width={16}
                  height={16}
                />
                <span className="phoneTable__content-price">
                  {item[currentIndex].price}
                </span>
              </div>
            </td>
            <td className="phoneTable__content-descr">
              {item[currentIndex].pixels}
            </td>
            <td className="phoneTable__content-descr">
              {item[currentIndex].type}
            </td>
            <td className="phoneTable__content-descr transaction">
              {item[currentIndex].transaction}
            </td>
            <td className="phoneTable__content-descr radiusrd">
              {" "}
              {item[currentIndex].dateTime}{" "}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="phoneTable__content-button">
        {item.map((image, index) => (
          <div
            key={image.id}
            className={`phoneTable__content-btn ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default mobileTable;
