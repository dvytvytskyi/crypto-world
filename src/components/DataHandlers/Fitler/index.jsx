import Button from "../../UI/Button";
import "./filter.scss";

export default function Filter({ filterProp, handleChangeFilter }) {
  return (
    <ul className="sort">
      <li>
        <Button
          className={
            filterProp.includes("All")
              ? "button--purple"
              : "button--gradientBorder"
          }
          handler={() => handleChangeFilter("All")}
        >
          All
        </Button>
      </li>
      <li>
        <Button
          className={
            filterProp.includes("Europe")
              ? "button--purple"
              : "button--gradientBorder"
          }
          handler={() => handleChangeFilter("Europe")}
        >
          Europe
        </Button>
      </li>
      <li>
        <Button
          className={
            filterProp.includes("North America")
              ? "button--purple"
              : "button--gradientBorder"
          }
          handler={() => handleChangeFilter("North America")}
        >
          North America
        </Button>
      </li>
      <li>
        <Button
          className={
            filterProp.includes("South America")
              ? "button--purple"
              : "button--gradientBorder"
          }
          handler={() => handleChangeFilter("South America")}
        >
          South America
        </Button>
      </li>
      <li>
        <Button
          className={
            filterProp.includes("Asia")
              ? "button--purple"
              : "button--gradientBorder"
          }
          handler={() => handleChangeFilter("Asia")}
        >
          Asia
        </Button>
      </li>
      <li>
        <Button
          className={
            filterProp.includes("Oceania")
              ? "button--purple"
              : "button--gradientBorder"
          }
          handler={() => handleChangeFilter("Oceania")}
        >
          Oceania
        </Button>
      </li>
      <li>
        <Button
          className={
            filterProp.includes("Africa")
              ? "button--purple"
              : "button--gradientBorder"
          }
          handler={() => handleChangeFilter("Africa")}
        >
          Africa
        </Button>
      </li>
    </ul>
  );
}
