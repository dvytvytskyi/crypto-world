import React, { useState } from "react";
import FilterButtons from "../../../../components/DataHandlers/FilterButtons";
import UsdtBtcButtons from "../../../../components/DataHandlers/UsdtBtcButtons";
import SearchAndButtons from "../../../../components/SearchAndButtons";
import Filter from "../../../../components/DataHandlers/Fitler";
import "./Filter__MarketP.scss";

const index = () => {
  const [filter, setFilter] = useState("all");
  const [currency, setCurrency] = useState("usdt");
  const [inputSearch, setInputSearch] = useState("");
  const [sort, setSort] = useState("biggest");

  return (
    <section className="market__content-filter">
      <div className="buyWholeCountry__Data buyWholeCountry__Data--country">
        <span>
          <div className="hallOfFame__content-visibleAndHidden">
            <FilterButtons />
            <div className="buyWholeCountry__filterBox">
              <Filter filterProp={filter} handleChangeFilter={setFilter} />
            </div>
            <UsdtBtcButtons
              currency={currency}
              handleChangeCurrency={setCurrency}
            />
            <FilterButtons />
          </div>
          <div>
            <SearchAndButtons
              sort={sort}
              search={inputSearch}
              handeSearch={setInputSearch}
              handleSort={setSort}
            />
          </div>
        </span>
      </div>
    </section>
  );
};

export default index;
