import "./dataCountry__ContriesP.scss";

import { useState, useRef, useEffect } from "react";
import * as d3 from "d3";
import worldMap from "../../../../mapData/worldMap.json";
import Filter from "../../../../components/DataHandlers/Fitler";
import SearchAndButtons from "../../../../components/SearchAndButtons";
import Pagination from "../../../../components/DataHandlers/Pagination";
import FilterButtons from "../../../../components/DataHandlers/FilterButtons";

import SkeletonLoading from "../../../../components/UI/SkeletonLoading";
import BlockContainer from "../../../../components/UI/BlockContainer";
import Button from "../../../../components/UI/Button";
import { Link, useSearchParams } from "react-router-dom";
import { useGetTopCountriesQuery } from "../../../../store/query/analyticsApi/analyticsSpecificStatisticsAPI";

export default function DataCountry__BuyWholeCountryP() {
  let [searchParams, setSearchParams] = useSearchParams();
  const mockTopCountries = [
    { countryName: "United States", countryTag: "US", percentageSold: 75 },
    { countryName: "Germany", countryTag: "DE", percentageSold: 50 },
    { countryName: "Japan", countryTag: "JP", percentageSold: 40 },
    { countryName: "India", countryTag: "IN", percentageSold: 30 },
    { countryName: "Australia", countryTag: "AU", percentageSold: 20 },
  ];
  const [data, setData] = useState(mockTopCountries);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [skeletonHeight, setSkeletonHeight] = useState(0);
  const [skeletonGridHeight, setSkeletonGridHeight] = useState(0);
  const [dataViewType, setDataViewType] = useState("block");
  const [pagintaionPage, setPaginationPage] = useState(1);
  const [filters, setFilters] = useState({
    continents: ["All"],
    search: "",
  });
  const handeSetInputSearch = (e) => {
    setFilters({ ...filters, search: e });
  };
  const handeSetFilter = (newItem) => {
    const sameItem = filters.continents.includes(newItem);
    if (filters.continents.includes("All") && newItem !== "All")
      setFilters({
        ...filters,
        continents: [
          ...filters.continents.filter((item) => item !== "All"),
          newItem,
        ],
      });
    else if (newItem === "All")
      setFilters({
        ...filters,
        continents: ["All"],
      });
    else if (sameItem) {
      if (filters.continents.length === 1)
        setFilters({
          ...filters,
          continents: ["All"],
        });
      else
        setFilters({
          ...filters,
          continents: filters.continents.filter((item) => item !== newItem),
        });
    } else
      setFilters({ ...filters, continents: [...filters.continents, newItem] });
  };
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const handleSearchBtn = () => {
    const jsonString = JSON.stringify(filters);
    const searchParams = new URLSearchParams();
    searchParams.append("filters", jsonString);
    setSearchParams(searchParams);
  };

  function viewTypeChange(type) {
    if (type === "block") setDataViewType(type);
    else setDataViewType(type);
  }
  useEffect(() => {
    if (windowWidth >= 1440) {
      setSkeletonHeight(284);
      setSkeletonGridHeight(456);
    }
    if (windowWidth < 1440 && windowWidth > 768) {
      setSkeletonHeight(227);
      setSkeletonGridHeight(371);
    }
    if (windowWidth < 768) {
      setSkeletonHeight(192);
      setSkeletonGridHeight(369);
    }
  }, [windowWidth]);
  useEffect(() => {
    const newFilterCriteria = JSON.parse(searchParams.get("filters"));
    if (newFilterCriteria) {
      setFilters(newFilterCriteria);
    } else {
      const jsonString = JSON.stringify(filters);
      const searchParams = new URLSearchParams();
      searchParams.append("filters", jsonString);
      setSearchParams(searchParams);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="buyWholeCountry__Data buyWholeCountry__Data--country buyWholeCountry__Data--hideBtns">
      <span>
        <div>
          <FilterButtons
            viewHandlerChange={viewTypeChange}
            viewType={dataViewType}
          />
          <div className="buyWholeCountry__filterBox">
            <Filter
              filterProp={filters.continents}
              handleChangeFilter={handeSetFilter}
            />
          </div>
        </div>
        <div>
          <FilterButtons
            viewHandlerChange={viewTypeChange}
            viewType={dataViewType}
          />
          <SearchAndButtons
            sort={filters}
            search={filters.search}
            handeSearch={handeSetInputSearch}
            handleSort={setFilters}
          />
          <Button className="button--purple" handler={handleSearchBtn}>
            Search
          </Button>
        </div>
      </span>
      <Pagination
        toTalPages={20}
        pageNumber={pagintaionPage}
        handeChangePage={setPaginationPage}
      >
        {isLoading ? (
          <>
            {dataViewType === "block" ? (
              <>
                <SkeletonLoading height={skeletonHeight} />
                <SkeletonLoading height={skeletonHeight} />
                <SkeletonLoading height={skeletonHeight} />
                <SkeletonLoading height={skeletonHeight} />
                <SkeletonLoading height={skeletonHeight} />
                <SkeletonLoading height={skeletonHeight} />
              </>
            ) : (
              <>
                <SkeletonLoading height={skeletonGridHeight} />
              </>
            )}
          </>
        ) : dataViewType === "block" ? (
          <div className="blockGridView">
            {data.map((item, index) => (
              <CountryBuy
                name={item.countryName}
                tag={item.countryTag}
                soldCountry={item.percentageSold}
                key={index}
              />
            ))}
          </div>
        ) : windowWidth < 768 ? (
          <>
            <div className="tableDescr__table">
              <table className="tableDescr__table-table">
                <thead className="tableDescr__table-thead">
                  <tr>
                    <th className="tableDescr__table-head radiuslu">COUNTRY</th>
                    <th className="tableDescr__table-head radiusru"></th>
                  </tr>
                </thead>
                <tbody className="tableDescr__table-body">
                  {data.map((item, index) => (
                    <MobileTableSectin
                      name={item.countryName}
                      tag={item.countryTag}
                      soldCountry={item.percentageSold}
                      key={index}
                      last={index === data.length - 1}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div className="tableDescr__table">
            <table className="tableDescr__table-table">
              <thead className="tableDescr__table-thead">
                <tr>
                  <th className="tableDescr__table-head radiuslu">COUNTRY</th>
                  <th className="tableDescr__table-head">SOLD</th>
                  <th className="tableDescr__table-head">% WORLD</th>
                  <th className="tableDescr__table-head"></th>
                  <th className="tableDescr__table-head">AVG PRICE</th>
                  <th className="tableDescr__table-head radiusru"></th>
                </tr>
              </thead>
              <tbody className="tableDescr__table-body">
                {data.map((item, index) => (
                  <tr className="tableDescr__table-tr">
                    <td
                      className={`tableDescr__table-descr ${
                        index === data.length - 1 ? "radiusld" : ""
                      }`}
                    >
                      <div className="tableDescr__table-info">
                        <span>{item.countryName}</span>
                      </div>
                    </td>
                    <td className="tableDescr__table-descr">
                      {item.percentageSold}%
                    </td>
                    <td className="tableDescr__table-descr">0.064%</td>
                    <th className="tableDescr__table-descr"></th>
                    <td className="tableDescr__table-descr">
                      <div className="tableDescr__table-info">
                        <img
                          src="/assets/UI/usdt.svg"
                          alt="Table image"
                          width={23.65}
                          height={20.57}
                        />
                        <span>630.25</span>
                        <img
                          src="/assets/UI/bcoin.svg"
                          alt="Table image"
                          width={23.65}
                          height={20.57}
                        />
                        <span>0,4223</span>
                      </div>
                    </td>
                    <td
                      className={`tableDescr__table-descr ${
                        index === data.length - 1 ? "radiusrd" : ""
                      }`}
                    >
                      <div className="market__table-buttons">
                        <Link to={`/country/${item.countryTag}`}>
                          <Button className="button--purple">Visit</Button>
                        </Link>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Pagination>
    </section>
  );
}
function CountryBuy({ name, tag, soldCountry, soldWorld }) {
  const canvasRef = useRef();
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    const currentCountry = worldMap.features.find(
      (item) => item.properties.name === name
    );

    const projection = d3
      .geoMercator()
      .fitSize([width, height], currentCountry);

    const path = d3.geoPath().projection(projection).context(context);
    context.clearRect(0, 0, width, height);
    context.beginPath();
    path(currentCountry);

    context.fillStyle = "#A255FB";

    context.fill();
    context.stroke();

    context.restore();

    return () => {
      d3.select(canvas).on(".zoom", null);
    };
  }, []);
  return (
    <div className="countryBuy">
      <BlockContainer className="blockContainer--grey">
        <span className="countryBuy__infoBox">
          <span className="countryBuy__info">
            <span className="countryBuy__textBox">
              <span className="countryBuy__title">{soldCountry}%</span>
              Sold
            </span>
            <span className="countryBuy__textBox">
              <span className="countryBuy__title">{soldWorld}%</span>% World
            </span>
          </span>
          <span className="countryBuy__info">
            <span className="countryBuy__textBox">
              <span className="countryBuy__title">112,500</span>
              <span className="countryBuy__currency">
                USDT
                <img
                  src="/assets/UI/usdt.svg"
                  alt="usdticon"
                  width={20}
                  height={20}
                  className="countryBuy__currencyImg"
                />
              </span>
            </span>
            <span className="countryBuy__textBox">
              <span className="countryBuy__title">0.4223</span>
              <span className="countryBuy__currency">
                BTC
                <img
                  src="/assets/UI/bcoin.svg"
                  alt="bcoinicon"
                  width={20}
                  height={20}
                  className="countryBuy__currencyImg"
                />
              </span>
            </span>
          </span>
        </span>
        <div className="countryBuy__cntryImgBox">
          <canvas
            ref={canvasRef}
            width={500}
            height={200}
            className="countryBuy__cntryImg"
          />
        </div>
        <span className="countryBuy__bottom">
          <h3 className="countryBuy__name">{name}</h3>
          <Link to={`/country/${tag}`}>
            <Button className="button--blurGrey">
              Visit
              <img
                src="/assets/UI/btnArrow.svg"
                alt="btn_arrow"
                width={16}
                height={16}
              />
            </Button>
          </Link>
        </span>
      </BlockContainer>
    </div>
  );
}
function MobileTableSectin({ name, tag, soldCountry, soldWorld, last }) {
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
            <span>{name}</span>
          </div>
        </td>
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
            <Link to={`/country/${tag}`}>
              <Button className="button--purple">Visit</Button>
            </Link>
          </div>
        </td>
      </tr>
      {showExtaInfo && (
        <>
          <tr className="tableDescr__table-tr">
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              }`}
            >
              <div className="tableDescr__table-info">
                <span>SOLD</span>
              </div>
            </td>
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              }`}
            >
              {soldCountry}%
            </td>
          </tr>
          <tr className="tableDescr__table-tr">
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              }`}
            >
              <div className="tableDescr__table-info">
                <span>WORLD</span>
              </div>
            </td>
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              }`}
            >
              {soldWorld}%
            </td>
          </tr>
          <tr className="tableDescr__table-tr">
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              } ${last && showExtaInfo && "radiusld"}`}
            >
              <div className="tableDescr__table-info">
                <span>AVG PRICE</span>
              </div>
            </td>
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              } ${last && showExtaInfo && "radiusrd"}`}
            >
              {100}
            </td>
          </tr>
        </>
      )}
    </>
  );
}
