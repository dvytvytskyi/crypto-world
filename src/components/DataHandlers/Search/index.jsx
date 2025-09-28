import { useState } from "react";
import "./search.scss";
import Button from "../../UI/Button";
import dataHeaderTable from "./dataHeaderTable";
import useDebounce from "../../../hooks/useDebounce";

export default function Search() {
  const [showSelect, setShowSelect] = useState(false);
  const copyDataHeadertable = dataHeaderTable.slice(0, 6);
  // const [value, setValue] = useState();
  // const debouncedSearch = useDebounce(search, 500);

  // function search(query) {
  //   fetch(`` + query)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json);
  //     });
  // }

  // const onChange = (e) => {
  //   setValue(e.target.value);
  //   debouncedSearch(e.target.value);
  // };

  return (
    <div className="search__wrapper">
      <span className="search__box" onClick={() => setShowSelect(!showSelect)}>
        <img
          src="/assets/UI/search.svg"
          alt="searchIcon"
          width={24}
          height={24}
          className="search__img"
        />
        <input
          type="text"
          className="search__input"
          placeholder="Search by country name"
          // value={value}
          // onChange={onChange}
        />
      </span>
      <div
        className={`search__wrapper-dropContent ${showSelect ? "active" : ""}`}
      >
        <div className="search__table">
          <table className="search__table-table">
            <thead className="search__table-thead">
              <tr>
                <th className="search__table-head searchRadiuslu"></th>
                <th className="search__table-head">Country</th>
                <th className="search__table-head">Sold/total pixels</th>
                <th className="search__table-head searchRadiusru">Sold rate</th>
              </tr>
            </thead>
            <tbody className="search__table-body">
              {copyDataHeadertable.map((item, index) => (
                <tr className="search__table-tr" key={index}>
                  <td
                    className={`search__table-descr ${
                      index === copyDataHeadertable.length - 1
                        ? "searchRadiusld"
                        : ""
                    }`}
                  >
                    <img
                      src={item.img}
                      alt="Image country"
                      width={24}
                      height={24}
                    />
                  </td>
                  <td className="search__table-descr">{item.title}</td>
                  <td className="search__table-descr">
                    <div>
                      <span>{item.soldPixels} </span>
                      <span className="search__table-descr totalPixels">
                        / {item.totalPixels}
                      </span>
                    </div>
                  </td>
                  <td
                    className={`search__table-descr ${
                      index === copyDataHeadertable.length - 1
                        ? "searchRadiusrd"
                        : ""
                    }`}
                  >
                    {item.rate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
