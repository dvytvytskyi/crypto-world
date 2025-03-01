import "./filterButtons.scss";

import Button from "../../UI/Button";

export default function FilterButtons({ viewHandlerChange, viewType }) {
  return (
    <div className="filter__filter-buttons">
      <Button
        className={`button--${
          viewType === "block" ? "purple" : "gradientBorder"
        }`}
        handler={() => viewHandlerChange("block")}
      >
        <img
          src="/assets/UI/cube.svg"
          alt="Button cube"
          width={14}
          height={14}
        />
      </Button>
      <Button
        className={`button--${
          viewType === "block" ? "gradientBorder" : "purple"
        }`}
        handler={() => viewHandlerChange("table")}
      >
        <img
          src="/assets/UI/burger.svg"
          alt="Button cube"
          width={24}
          height={24}
        />
      </Button>
    </div>
  );
}
