import "./searchFull.scss";

export default function SearchFull({ search, handleSearch, placeholder }) {
  return (
    <span className="search__boxFull">
      <img
        src="/assets/UI/search.svg"
        alt="searchIcon"
        width={24}
        height={24}
        className="search__img"
      />
      <input
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        type="text"
        className="search__inputFull"
        placeholder={placeholder ? placeholder : "Search by country"}
      />
    </span>
  );
}
