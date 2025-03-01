import SearchAndButtons from "../../../../components/SearchAndButtons";
import FilterButtons from "../../../../components/DataHandlers/FilterButtons";
import Filter from "../../../../components/DataHandlers/Fitler";
import Button from "../../../../components/UI/Button";
import Pagination from "../../../../components/DataHandlers/Pagination";
import SkeletonLoading from "../../../../components/UI/SkeletonLoading";
import { useState, useEffect } from "react";
import "./Filter__HallOfFameP.scss";
import countryFlag from "../../../../mapData/countryFlag.json";
import { Link, useSearchParams } from "react-router-dom";
import BlockContainer from "../../../../components/UI/BlockContainer";

const data = [
  {
    company: {
      name: "Trident",
      icon: "/assets/tempImgs/Trident.png",
      descr:
        "American multinational automotive and clean energy company headquartered in Austin, Texas, which designs, manufactures and sells electric vehicles, stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services.",
    },
    totalPixels: 12500,
    countries: [
      {
        country: "Ukraine",
        countryId: "URK",
      },
      {
        country: "USA",
        countryId: "USA",
      },
      {
        country: "Afghanistan",
        countryId: "AFG",
      },
    ],
  },
  {
    company: {
      name: "Trident",
      icon: "/assets/tempImgs/Trident.png",
      descr:
        "American multinational automotive and clean energy company headquartered in Austin, Texas, which designs, manufactures and sells electric vehicles, stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services.",
    },
    totalPixels: 12500,
    countries: [
      {
        country: "Ukraine",
        countryId: "URK",
      },
      {
        country: "USA",
        countryId: "USA",
      },
      {
        country: "Afghanistan",
        countryId: "AFG",
      },
    ],
  },
  {
    company: {
      name: "Trident",
      icon: "/assets/tempImgs/Trident.png",
      descr:
        "American multinational automotive and clean energy company headquartered in Austin, Texas, which designs, manufactures and sells electric vehicles, stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services.",
    },
    totalPixels: 12500,
    countries: [
      {
        country: "Ukraine",
        countryId: "URK",
      },
      {
        country: "USA",
        countryId: "USA",
      },
      {
        country: "Afghanistan",
        countryId: "AFG",
      },
    ],
  },
  {
    company: {
      name: "Trident",
      icon: "/assets/tempImgs/Trident.png",
      descr:
        "American multinational automotive and clean energy company headquartered in Austin, Texas, which designs, manufactures and sells electric vehicles, stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services.",
    },
    totalPixels: 12500,
    countries: [
      {
        country: "Ukraine",
        countryId: "URK",
      },
      {
        country: "USA",
        countryId: "USA",
      },
      {
        country: "Afghanistan",
        countryId: "AFG",
      },
    ],
  },
  {
    company: {
      name: "Trident",
      icon: "/assets/tempImgs/Trident.png",
      descr:
        "American multinational automotive and clean energy company headquartered in Austin, Texas, which designs, manufactures and sells electric vehicles, stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services.",
    },
    totalPixels: 12500,
    countries: [
      {
        country: "Ukraine",
        countryId: "URK",
      },
      {
        country: "USA",
        countryId: "USA",
      },
      {
        country: "Afghanistan",
        countryId: "AFG",
      },
    ],
  },
  {
    company: {
      name: "Trident",
      icon: "/assets/tempImgs/Trident.png",
      descr:
        "American multinational automotive and clean energy company headquartered in Austin, Texas, which designs, manufactures and sells electric vehicles, stationary battery energy storage devices from home to grid-scale, solar panels and solar shingles, and related products and services.",
    },
    totalPixels: 12500,
    countries: [
      {
        country: "Ukraine",
        countryId: "URK",
      },
      {
        country: "USA",
        countryId: "USA",
      },
      {
        country: "Afghanistan",
        countryId: "AFG",
      },
    ],
  },
];

const index = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [skeletonHeight, setSkeletonHeight] = useState(0);
  const [skeletonGridHeight, setSkeletonGridHeight] = useState(0);
  const [dataViewType, setDataViewType] = useState("block");
  const [pagintaionPage, setPaginationPage] = useState(1);
  const [filters, setFilters] = useState({
    continents: ["All"],
    search: "",
    sort: "newest",
  });
  const handeSetInputSearch = (e) => {
    setFilters({ ...filters, search: e });
  };
  const handeSetSort = (e) => {
    setFilters({ ...filters, sort: e });
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
      setSkeletonHeight(232);
      setSkeletonGridHeight(484);
    }
    if (windowWidth < 1440 && windowWidth > 768) {
      setSkeletonHeight(201);
      setSkeletonGridHeight(476);
    }
    if (windowWidth < 768) {
      setSkeletonHeight(201);
      setSkeletonGridHeight(373);
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
    <section className="buyWholeCountry__Data buyWholeCountry__Data--country">
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
        <div className="searchBtnBox">
          <FilterButtons
            viewHandlerChange={viewTypeChange}
            viewType={dataViewType}
          />
          <SearchAndButtons
            sort={filters.sort}
            search={filters.search}
            handeSearch={handeSetInputSearch}
            handleSort={handeSetSort}
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
              <CompanyItem
                key={index}
                name={item.company.name}
                icon={item.company.icon}
                totalPixels={item.totalPixels}
                countries={item.countries}
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
                    <th className="tableDescr__table-head">TOTAL PIXELS</th>
                    <th className="tableDescr__table-head radiusru"></th>
                  </tr>
                </thead>
                <tbody className="tableDescr__table-body">
                  {data.map((item, index) => (
                    <MobileTableSection
                      name={item.company.name}
                      icon={item.company.icon}
                      countries={item.countries}
                      key={index}
                      last={index === data.length - 1}
                      totalPixels={item.totalPixels}
                      f
                      descr={
                        item.company.descr.length > 60
                          ? `${item.company.descr.slice(0, 60)}...`
                          : item.company.descr
                      }
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
                  <th className="tableDescr__table-head radiuslu">SELLER</th>
                  <th className="tableDescr__table-head">TOTAL PIXELS</th>
                  <th className="tableDescr__table-head">COUNTRY</th>
                  <th className="tableDescr__table-head">DESCRIPTION</th>
                  <th
                    className="tableDescr__table-head radiusru"
                    style={{ width: "15%" }}
                  ></th>
                </tr>
              </thead>
              <tbody className="tableDescr__table-body">
                {data.map((item, index) => (
                  <tr className="tableDescr__table-tr" key={index}>
                    <td
                      className={`tableDescr__table-descr ${
                        index === data.length - 1 ? "radiusld" : ""
                      }`}
                    >
                      <div className="tableDescr__table-info">
                        <img
                          src={item.company.icon}
                          alt="companyIcon"
                          width={36}
                          height={36}
                        />
                        <span>{item.company.name}</span>
                      </div>
                    </td>
                    <td className="tableDescr__table-descr">
                      {item.totalPixels
                        .toString()
                        .replace(/,/g, "")
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </td>
                    <td className="tableDescr__table-descr">
                      <div className="tableDescr__table-info">
                        {item.countries.map((item, index) => {
                          const flag = countryFlag.find(
                            (item1) => item1.name === item.country
                          );
                          return (
                            <Link to={`/country/${item.countryId}`} key={index}>
                              <img
                                src={flag.flag_1x1}
                                alt={item.country}
                                width={24}
                                height={24}
                                className="tableDescr__table-countryIcon"
                              />
                            </Link>
                          );
                        })}
                      </div>
                    </td>
                    <th className="tableDescr__table-descr tableDescr__table-descr--purple">
                      {item.company.descr.length > 60
                        ? `${item.company.descr.slice(0, 60)}...`
                        : item.company.descr}
                    </th>
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
};

export default index;

function CompanyItem({ name, icon, id, totalPixels, countries }) {
  return (
    <div className="companyItem">
      <BlockContainer className="blockContainer--grey">
        <span className="companyItem__top">
          <span>
            <h3>{name}</h3>
            <span className="companyItem__countriesBox">
              {countries.map((item, index) => {
                const flag = countryFlag.find(
                  (item1) => item1.name === item.country
                );
                return (
                  <Link to={`/country/${item.countryId}`} key={index}>
                    <img
                      src={flag.flag_1x1}
                      alt={item.country}
                      width={24}
                      height={24}
                      className="tableDescr__table-countryIcon"
                    />
                  </Link>
                );
              })}
            </span>
          </span>
          <img
            src={icon}
            alt="companyIcon"
            width={90}
            height={90}
            className="companyItem__companyIcon"
          />
        </span>
        <span className="companyItem__bottom">
          <span className="companyItem__bottomTextBox">
            <h4>
              {totalPixels
                .toString()
                .replace(/,/g, "")
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h4>
            <p>Total Pixels</p>
          </span>
          <Link to={`/country/`}>
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
function MobileTableSection({
  name,
  icon,
  totalPixels,
  descr,
  id,
  last,
  countries,
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
        <td className={`tableDescr__table-descr`}>{totalPixels}</td>
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
                <span>COUNTRY</span>
              </div>
            </td>
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              }`}
            ></td>
            <td
              className={`tableDescr__table-descr ${
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              }`}
            >
              <div className="tableDescr__table-info">
                {countries.map((item, index) => {
                  const flag = countryFlag.find(
                    (item1) => item1.name === item.country
                  );
                  return (
                    <Link to={`/country/${item.countryId}`} key={index}>
                      <img
                        src={flag.flag_1x1}
                        alt={item.country}
                        width={24}
                        height={24}
                        className="tableDescr__table-countryIcon"
                      />
                    </Link>
                  );
                })}
              </div>
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
                showExtaInfo ? "tableDescr__table-descr--dropdown" : ""
              }`}
            ></td>
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
