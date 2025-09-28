import "./usdtBtcButtons.scss";

import Button from "../../UI/Button";

export default function UsdtBtcButtons({ currency, handleChangeCurrency }) {
  return (
    <div className="filter__buttons">
      <Button
        className={
          currency === "usdt" ? "button--purple" : "button--gradientBorder"
        }
        handler={() => handleChangeCurrency("usdt")}
      >
        <div>
          <img
            src="/assets/UI/usdt.svg"
            alt="Button cube"
            width={23.65}
            height={20.57}
          />
        </div>
        USDT
      </Button>
      <Button
        className={
          currency === "btc" ? "button--purple" : "button--gradientBorder"
        }
        handler={() => handleChangeCurrency("btc")}
      >
        <img
          src="/assets/UI/bcoin.svg"
          alt="Button cube"
          width={24}
          height={24}
        />
        BTC
      </Button>
    </div>
  );
}
