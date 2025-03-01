import { useEffect, useState } from "react";
import Pagination from "../Pagination";
import Button from "../../UI/Button";
import "./tableDescr.scss";

export default function TableDescr({ item }) {
  const [showMobiletable, setShowMobiletable] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentIndex, setCurrentIndex] = useState(1);

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
    if (windowWidth > 660) {
      setShowMobiletable(true);
    } else {
      setShowMobiletable(false);
    }
  }, [windowWidth]);

  return (
    <div className="tableDescr">
      {showMobiletable ? (
        <div className="tableDescr__table">
          <table className="tableDescr__table-table">
            <thead className="tableDescr__table-thead">
              <tr>
                <th className="tableDescr__table-head radiuslu">SELLER</th>
                <th className="tableDescr__table-head">TOTAL PIXELS</th>
                <th className="tableDescr__table-head"></th>
                <th className="tableDescr__table-head">DOMINANCE</th>
                <th className="tableDescr__table-head radiusru">DISCRIPTION</th>
              </tr>
            </thead>
            <tbody className="tableDescr__table-body">
              <tr className="tableDescr__table-tr">
                <td className="tableDescr__table-descr">
                  <div className="tableDescr__table-info">
                    <img
                      src="/assets/tempImgs/Trident.png"
                      alt="Table image"
                      width={36}
                      height={36}
                    />
                    <span>Trident</span>
                  </div>
                </td>
                <td className="tableDescr__table-descr">12,500</td>
                <td className="tableDescr__table-descr"></td>
                <td className="tableDescr__table-descr">0,03%</td>
                <td className="tableDescr__table-descr">
                  <div className="tableDescr__table-button">
                    <span className="textPurple">
                      Best real estate in Dubai for amazing price
                    </span>
                    <Button className="button--blurGrey">Visit</Button>
                  </div>
                </td>
              </tr>
              <tr className="tableDescr__table-tr">
                <td className="tableDescr__table-descr">
                  <div className="tableDescr__table-info">
                    <img
                      src="/assets/tempImgs/Binance.png"
                      alt="Table image"
                      width={36}
                      height={36}
                    />
                    <span>Binance</span>
                  </div>
                </td>
                <td className="tableDescr__table-descr">8,500</td>
                <td className="tableDescr__table-descr"></td>
                <td className="tableDescr__table-descr">0,02%</td>
                <td className="tableDescr__table-descr">
                  <div className="tableDescr__table-button">
                    <span className="textPurple">
                      Electro cars for everyone
                    </span>
                    <Button className="button--blurGrey">Visit</Button>
                  </div>
                </td>
              </tr>
              <tr className="tableDescr__table-tr">
                <td className="tableDescr__table-descr radiusld">
                  <div className="tableDescr__table-info">
                    <img
                      src="/assets/tempImgs/Tesla.png"
                      alt="Table image"
                      width={36}
                      height={36}
                    />
                    <span>Tesla</span>
                  </div>
                </td>
                <td className="tableDescr__table-descr">3,800</td>
                <td className="tableDescr__table-descr"></td>
                <td className="tableDescr__table-descr">0,03%</td>
                <td className="tableDescr__table-descr radiusrd">
                  <div className="tableDescr__table-button">
                    <span className="textPurple">Crypto force</span>
                    <Button className="button--blurGrey">Visit</Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <table className="phoneTable">
          <thead className="phoneTable__content-thead">
            <th className="phoneTable__content-head radiuslu">SELLER</th>
            <th className="phoneTable__content-head">TOTAL PIXELS</th>
            <th className="phoneTable__content-head">COUNTRIES</th>
            <th className="phoneTable__content-head">DOMINANCE</th>
            <th className="phoneTable__content-head radiusld">DISCRIPTION</th>
          </thead>
          <tbody className="phoneTable__content-body">
            <tr className="phoneTable__content-tr">
              <td className="phoneTable__content-descr radiusru">
                <div className="tableDescr__table-info">
                  <img
                    src={item[currentIndex].imgSeller}
                    alt="Table image"
                    width={36}
                    height={36}
                  />
                  <span>{item[currentIndex].seller}</span>
                </div>
              </td>
              <td className="phoneTable__content-descr">
                {item[currentIndex].totalPixels}
              </td>
              <td className="phoneTable__content-descr">
                <img
                  src={item[currentIndex].countries}
                  alt="Table image"
                  className="tableDescr__table-img"
                  width={24}
                  height={24}
                />
              </td>
              <td className="phoneTable__content-descr">
                {item[currentIndex].dominance}
              </td>
              <td className="phoneTable__content-descr radiusrd">
                <div className="tableDescr__table-button">
                  <span className="textPurple">
                    {item[currentIndex].description}
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      )}
      <Pagination
        pageNumber={currentIndex}
        handeChangePage={setCurrentIndex}
        toTalPages={item.length - 1}
      />
    </div>
  );
}
