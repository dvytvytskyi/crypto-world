import React, { useEffect, useState } from "react";
import "./table__MyAccountP.scss";
import Button from "../../../../components/UI/Button";
import Pagination from "../../../../components/DataHandlers/Pagination";

const index = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([
    {
      name: "Triden 1",
      icon: "/assets/tempImgs/Trident.png",
      priceTr: 630.25,
      priceBt: 0.4223,
      priceSell: null,
      totalPixels: 4,
      percentWorld: 0.064,
      ownership: 19,
      stateBtn: "Sell",
      inputDisabled: false,
    },
    {
      name: "Triden 2",
      icon: "/assets/tempImgs/Trident.png",
      priceTr: 630.25,
      priceBt: 0.4223,
      priceSell: null,
      totalPixels: 4,
      percentWorld: 0.064,
      ownership: 19,
      stateBtn: "Sell",
      inputDisabled: false,
    },
    {
      name: "Triden 3",
      icon: "/assets/tempImgs/Trident.png",
      priceTr: 630.25,
      priceBt: 0.4223,
      priceSell: null,
      totalPixels: 4,
      percentWorld: 0.064,
      ownership: 19,
      stateBtn: "Sell",
      inputDisabled: false,
    },
    {
      name: "Triden 4",
      icon: "/assets/tempImgs/Trident.png",
      priceTr: 630.25,
      priceBt: 0.4223,
      priceSell: null,
      totalPixels: 4,
      percentWorld: 0.064,
      ownership: 19,
      stateBtn: "Sell",
      inputDisabled: false,
    },
    {
      name: "Triden 5",
      icon: "/assets/tempImgs/Trident.png",
      priceTr: 630.25,
      priceBt: 0.4223,
      priceSell: null,
      totalPixels: 4,
      percentWorld: 0.064,
      ownership: 19,
      stateBtn: "Sell",
      inputDisabled: false,
    },
    {
      name: "Triden 6",
      icon: "/assets/tempImgs/Trident.png",
      priceTr: 630.25,
      priceBt: 0.4223,
      priceSell: null,
      totalPixels: 4,
      percentWorld: 0.064,
      ownership: 19,
      stateBtn: "Sell",
      inputDisabled: false,
    },
  ]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handlePriceSellChange = (index, newValue) => {
    if (/^\d*\.?\d*$/.test(newValue) || newValue === "") {
      const updatedData = [...data];
      updatedData[index].priceSell = newValue;
      setData(updatedData);
    }
  };

  const handleSellButtonClick = (index) => {
    const priceSellValue = data[index].priceSell;

    if (priceSellValue !== null && priceSellValue !== "") {
      const updatedData = [...data];
      updatedData[index].stateBtn = "Submit";
      updatedData[index].inputDisabled = true;
      setData(updatedData);
    }
  };

  const handleSubmitPixels = (index) => {
    const updatedData = [...data];
    updatedData[index].stateBtn = "Cancel";
    setData(updatedData);
  };

  const handleCancelSalePixels = (index) => {
    const updatedData = [...data];
    updatedData[index].stateBtn = "Sell";
    updatedData[index].priceSell = null;
    updatedData[index].inputDisabled = false;
    setData(updatedData);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="tableMyAccP">
      <h1 className="tableMyAccP__title">Sell my pixels</h1>
      {windowWidth > 767 ? (
        <div className="tableDescr">
          <div className="tableDescr__table">
            <table className="tableDescr__table-table">
              <thead className="tableDescr__table-thead">
                <tr>
                  <th className="tableDescr__table-head radiuslu">SELLER</th>
                  <th className="tableDescr__table-head">Ownership</th>
                  <th className="tableDescr__table-head">% World</th>
                  <th className="tableDescr__table-head radiusru"></th>
                </tr>
              </thead>
              <tbody className="tableDescr__table-body">
                {data.map((item, index) => (
                  <tr className="tableDescr__table-tr">
                    <td
                      className={`tableDescr__table-descr ${
                        index === data.length - 1 && "radiusld"
                      }`}
                    >
                      <div className="tableDescr__table-info">
                        <img
                          src={item.icon}
                          alt="Table image"
                          width={36}
                          height={36}
                        />
                        <span>{item.name}</span>
                      </div>
                    </td>
                    <td className="tableDescr__table-descr">
                      {item.totalPixels}%
                    </td>
                    <td className="tableDescr__table-descr">
                      {item.percentWorld}%
                    </td>
                    <td
                      className={`tableDescr__table-descr ${
                        index === data.length - 1 && "radiusrd"
                      }`}
                    >
                      <div className="market__table-buttons">
                        <input
                          type="text"
                          placeholder="Input price here"
                          className="tableMyAccP__input"
                          value={item.priceSell || ""}
                          onChange={(e) =>
                            handlePriceSellChange(index, e.target.value)
                          }
                          disabled={item.inputDisabled}
                          required
                        />
                        {item.stateBtn === "Sell" && (
                          <Button
                            className="button--purple"
                            handler={() => handleSellButtonClick(index)}
                          >
                            Sell
                          </Button>
                        )}
                        {item.stateBtn === "Submit" && (
                          <Button
                            className="button--purple"
                            handler={() => handleSubmitPixels(index)}
                          >
                            Submit
                          </Button>
                        )}
                        {item.stateBtn === "Cancel" && (
                          <button
                            className="tableMyAccP__clearBtn"
                            onClick={() => handleCancelSalePixels(index)}
                          >
                            <img
                              src="/assets/UI/clearBtnIcon.svg"
                              alt="clearBtnIcon"
                              width={15}
                              height={15}
                            />
                            Cancel
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            pageNumber={page}
            handeChangePage={setPage}
            toTalPages={20}
          />
        </div>
      ) : (
        <div className="tableDescr">
          <div className="tableDescr__table">
            <table className="tableDescr__table-table">
              <thead className="tableDescr__table-thead">
                <tr>
                  <th className="tableDescr__table-head radiuslu">SELLER</th>
                  <th className="tableDescr__table-head">Ownership</th>
                  <th className="tableDescr__table-head">% World</th>

                  <th
                    className="tableDescr__table-head radiusru"
                    style={{ width: "10%" }}
                  ></th>
                </tr>
              </thead>
              <tbody className="tableDescr__table-body">
                {data.map((item, index) => (
                  <MobileTableSection
                    key={index}
                    last={index === data.length - 1}
                    item={item}
                    index={index}
                    handlePriceSellChange={handlePriceSellChange}
                    handleSellButtonClick={handleSellButtonClick}
                    handleSubmitPixels={handleSubmitPixels}
                    handleCancelSalePixels={handleCancelSalePixels}
                  />
                ))}
              </tbody>
            </table>
          </div>
          <Pagination
            pageNumber={page}
            handeChangePage={setPage}
            toTalPages={20}
          />
        </div>
      )}
    </div>
  );
};

export default index;

function MobileTableSection({
  last,
  item,
  index,
  handlePriceSellChange,
  handleSellButtonClick,
  handleSubmitPixels,
  handleCancelSalePixels,
}) {
  const [showExtaInfo, setShowExtraInfo] = useState(false);
  return (
    <>
      <tr className="tableDescr__table-tr">
        <td
          className={`tableDescr__table-descr ${
            last && !showExtaInfo ? "radiusld" : ""
          }`}
        >
          <div className="tableDescr__table-info">
            <img src={item.icon} alt="companyLogo" width={36} height={36} />
            <span>{item.name}</span>
          </div>
        </td>
        <td className="tableDescr__table-descr">{item.ownership}%</td>
        <td className="tableDescr__table-descr">{item.percentWorld}%</td>
        <td
          className={`tableDescr__table-descr ${
            last && !showExtaInfo ? "radiusrd" : ""
          }`}
        >
          <div className="market__table-buttons">
            <button
              className="market__table--dropDownBtn"
              onClick={() => setShowExtraInfo(!showExtaInfo)}
            >
              <img
                src="/assets/UI/listDropDown.svg"
                alt="dropDownIcon"
                width={24}
                height={24}
                className={`market__table--dropDownBtnIcon ${
                  showExtaInfo ? "market__table--dropDownBtnIcon--active" : ""
                }`}
              />
            </button>
          </div>
        </td>
      </tr>
      {showExtaInfo && (
        <>
          <tr className="tableDescr__table-tr">
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              } ${last && showExtaInfo && "radiusld"}`}
            >
              <div className="tableDescr__table-info">
                <div className="market__table-buttons">
                  <input
                    type="text"
                    placeholder="Input price here"
                    className="tableMyAccP__input"
                    value={item.priceSell || ""}
                    onChange={(e) =>
                      handlePriceSellChange(index, e.target.value)
                    }
                    disabled={item.inputDisabled}
                    required
                  />
                </div>
              </div>
            </td>
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              } ${last && showExtaInfo && "radiusld"}`}
            >
              <div className="tableDescr__table-info">
                <span></span>
              </div>
            </td>
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              } ${last && showExtaInfo && "radiusld"}`}
            >
              <div className="tableDescr__table-info">
                <span></span>
              </div>
            </td>
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo
                  ? `tableDescr__table-descr--dropdown tableDescr__table-descr--dropdown--purple`
                  : ""
              } ${last && showExtaInfo && "radiusrd"}`}
            >
              <div className="market__table-buttons">
                {item.stateBtn === "Sell" && (
                  <Button
                    className="button--purple"
                    handler={() => handleSellButtonClick(index)}
                  >
                    Sell
                  </Button>
                )}
                {item.stateBtn === "Submit" && (
                  <Button
                    className="button--purple"
                    handler={() => handleSubmitPixels(index)}
                  >
                    Submit
                  </Button>
                )}
                {item.stateBtn === "Cancel" && (
                  <button
                    className="tableMyAccP__clearBtn"
                    onClick={() => handleCancelSalePixels(index)}
                  >
                    <img
                      src="/assets/UI/clearBtnIcon.svg"
                      alt="clearBtnIcon"
                      width={15}
                      height={15}
                    />
                    Cancel
                  </button>
                )}
              </div>
            </td>
          </tr>
        </>
      )}
    </>
  );
}
