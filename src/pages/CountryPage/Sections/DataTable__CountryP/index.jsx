import "./dataTable__CountryP.scss";

import WidthContainer from "../../../../components/UI/WidthContainer";
import SkeletonLoading from "../../../../components/UI/SkeletonLoading";
import SearchAndButtons from "../../../../components/SearchAndButtons";
import Pagination from "../../../../components/DataHandlers/Pagination";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "../../../../components/UI/Button";

const data = [
  {
    name: "Tesla",
    icon: "/assets/tempImgs/Tesla.png",
    pixelsInCountry: 1250,
    countryDominance: 50,
    worldDominance: 3.22,
    descr:
      "American multinational automotive and clean energy company headquartered in Austin, Texas, which designs, manufactures and sells electric vehicles, stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services.",
  },
  {
    name: "Tesla",
    icon: "/assets/tempImgs/Tesla.png",
    pixelsInCountry: 1250,
    countryDominance: 50,
    worldDominance: 3.22,
    descr:
      "American multinational automotive and clean energy company headquartered in Austin, Texas, which designs, manufactures and sells electric vehicles, stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services.",
  },
  {
    name: "Tesla",
    icon: "/assets/tempImgs/Tesla.png",
    pixelsInCountry: 1250,
    countryDominance: 50,
    worldDominance: 3.22,
    descr:
      "American multinational automotive and clean energy company headquartered in Austin, Texas, which designs, manufactures and sells electric vehicles, stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services.",
  },
  {
    name: "Tesla",
    icon: "/assets/tempImgs/Tesla.png",
    pixelsInCountry: 1250,
    countryDominance: 50,
    worldDominance: 3.22,
    descr:
      "American multinational automotive and clean energy company headquartered in Austin, Texas, which designs, manufactures and sells electric vehicles, stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services.",
  },
  {
    name: "Tesla",
    icon: "/assets/tempImgs/Tesla.png",
    pixelsInCountry: 1250,
    countryDominance: 50,
    worldDominance: 3.22,
    descr:
      "American multinational automotive and clean energy company headquartered in Austin, Texas, which designs, manufactures and sells electric vehicles, stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services.",
  },
  {
    name: "Tesla",
    icon: "/assets/tempImgs/Tesla.png",
    pixelsInCountry: 1250,
    countryDominance: 50,
    worldDominance: 3.22,
    descr:
      "American multinational automotive and clean energy company headquartered in Austin, Texas, which designs, manufactures and sells electric vehicles, stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services.",
  },
];

export default function DataTable__CountryP() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [pagintaionPage, setPaginationPage] = useState(1);
  const [filters, setFilters] = useState({
    sort: "newest",
    search: "",
  });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [skeletonHeight, setSkeletonHeight] = useState(0);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  const handleSetSort = (e) => {
    setFilters({ ...filters, sort: e });
  };
  const handleSetInput = (e) => {
    setFilters({ ...filters, search: e });
  };
  const handleSearchBtn = () => {
    const jsonString = JSON.stringify(filters);
    const searchParams = new URLSearchParams();
    searchParams.append("filters", jsonString);
    setSearchParams(searchParams);
  };
  useEffect(() => {
    if (windowWidth >= 1440) {
      setSkeletonHeight(528);
    }
    if (windowWidth < 1440 && windowWidth > 768) {
      setSkeletonHeight(500);
    }
    if (windowWidth < 768) {
      setSkeletonHeight(369);
    }
  }, [windowWidth]);

  useEffect(() => {
    const newFilterCriteria = JSON.parse(searchParams.get("filters"));
    if (newFilterCriteria) setFilters(newFilterCriteria);
    else {
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
    <section className="dataTable__countryP">
      <WidthContainer>
        <div className="dataTable__countryP__searchBar">
          <SearchAndButtons
            sort={filters.sort}
            handleSort={handleSetSort}
            search={filters.search}
            handeSearch={handleSetInput}
          />
          <Button className="button--purple" handler={handleSearchBtn}>
            Search
          </Button>
        </div>
        <Pagination
          toTalPages={20}
          pageNumber={pagintaionPage}
          handeChangePage={setPaginationPage}
        >
          {windowWidth > 767 ? (
            <div className="tableDescr__table">
              <table className="tableDescr__table-table">
                <thead className="tableDescr__table-thead">
                  <tr>
                    <th className="tableDescr__table-head radiuslu">COMPANY</th>
                    <th className="tableDescr__table-head">
                      PIXELS IN COUNTRY
                    </th>
                    <th className="tableDescr__table-head">
                      COUNTRY DOMINANCE
                    </th>
                    <th className="tableDescr__table-head">WORLD DOMINANCE</th>
                    <th className="tableDescr__table-head">DESCRIPTION</th>
                    <th className="tableDescr__table-head radiusru"></th>
                  </tr>
                </thead>
                <tbody className="tableDescr__table-body">
                  {data.map((item, index) => (
                    <tr className="tableDescr__table-tr" key={index}>
                      <td
                        className={`tableDescr__table-descr ${
                          index === data.length - 1 && "radiusld"
                        }`}
                      >
                        <div className="tableDescr__table-info">
                          <img
                            src={item.icon}
                            alt="companyLogo"
                            width={36}
                            height={36}
                          />
                          <span>{item.name}</span>
                        </div>
                      </td>
                      <td className="tableDescr__table-descr">
                        {item.pixelsInCountry}
                      </td>
                      <td className="tableDescr__table-descr">
                        {item.countryDominance}%
                      </td>
                      <th className="tableDescr__table-descr">
                        {item.worldDominance}%
                      </th>
                      <td className="tableDescr__table-descr tableDescr__table-descr--purple">
                        {item.descr.length > 60
                          ? `${item.descr.slice(0, 60)}...`
                          : item.descr}
                      </td>
                      <td
                        className={`tableDescr__table-descr ${
                          index === data.length - 1 && "radiusrd"
                        }`}
                      >
                        <div className="market__table-buttons">
                          <Link to={`/country/`}>
                            <Button className="button--purple">Visit</Button>
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="tableDescr__table">
              <table className="tableDescr__table-table">
                <thead className="tableDescr__table-thead">
                  <tr>
                    <th className="tableDescr__table-head radiuslu">COMPANY</th>
                    <th className="tableDescr__table-head radiusru"></th>
                  </tr>
                </thead>
                <tbody className="tableDescr__table-body">
                  {data.map((item, index) => (
                    <MobileTableSection
                      name={item.name}
                      icon={item.icon}
                      pixelsInCountry={item.pixelsInCountry}
                      dominanceCountry={item.countryDominance}
                      dominanceWorld={item.worldDominance}
                      key={index}
                      descr={
                        item.descr.length > 60
                          ? `${item.descr.slice(0, 60)}...`
                          : item.descr
                      }
                      last={index === data.length - 1}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </Pagination>
      </WidthContainer>
    </section>
  );
}
function MobileTableSection({
  name,
  icon,
  pixelsInCountry,
  dominanceCountry,
  dominanceWorld,
  descr,
  id,
  last,
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
            <img src={icon} alt="companyLogo" width={36} height={36} />
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
            <Link to={`/country/`}>
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
                <span>PIXELS IN COUNTRY</span>
              </div>
            </td>
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              }`}
            >
              {pixelsInCountry}
            </td>
          </tr>
          <tr className="tableDescr__table-tr">
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              }`}
            >
              <div className="tableDescr__table-info">
                <span>COUNTRY DOMINANCE</span>
              </div>
            </td>
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              }`}
            >
              {dominanceCountry}%
            </td>
          </tr>
          <tr className="tableDescr__table-tr">
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              }`}
            >
              <div className="tableDescr__table-info">
                <span>WORLD DOMINANCE</span>
              </div>
            </td>
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              }`}
            >
              {dominanceWorld}%
            </td>
          </tr>
          <tr className="tableDescr__table-tr">
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              } ${last && showExtaInfo && "radiusld"}`}
            >
              <div className="tableDescr__table-info">
                <span>DESCRIPTION</span>
              </div>
            </td>
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo
                  ? `tableDescr__table-descr--dropdown tableDescr__table-descr--dropdown--purple`
                  : ""
              } ${last && showExtaInfo && "radiusrd"}`}
            >
              {descr}
            </td>
          </tr>
        </>
      )}
    </>
  );
}
