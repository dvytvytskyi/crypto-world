import "./header.scss";
import WidthContainer from "../UI/WidthContainer";
import Button from "../UI/Button";
import Search from "../DataHandlers/Search";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/slices/userSlice";

export default function Header() {
  const [showMenue, setShowMenue] = useState(false);
  const [auth, setAuth] = useState(false);

  return (
    <header className="header">
      <div className="header__blurEffect"></div>
      <WidthContainer>
        <Logo />
        <nav className="navbar">
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link to={"/statistics"}>
                <Button className="button--grey">Statistics</Button>
              </Link>
            </li>
            <li className="navbar__item">
              <Link to={"/market"}>
                <Button className="button--grey">Market</Button>
              </Link>
            </li>
            <li className="navbar__item">
              <Link to={"/pixel-map"}>
                <Button className="button--grey">Pixel Map</Button>
              </Link>
            </li>
          </ul>
        </nav>
        <Search />
        {auth ? (
          <span className="header__btnsBoxDeskTop">
            <Link to="/buyPixels">
              <Button className="button--purple">Buy pixels</Button>
            </Link>
            <Link to="/login">
              <Button className="button--grey authBtn">
                <img
                  src="/assets/components/Header/authPerson.png"
                  alt="Image person"
                  width={41}
                  height={41}
                />
              </Button>
            </Link>
          </span>
        ) : (
          <span className="header__btnsBoxDeskTop">
            <Link to="/buyPixels">
              <Button className="button--purple header__buyPixelsBtn">
                Buy pixels
              </Button>
            </Link>
            <Link to="/login">
              <Button className="button--grey">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="button--grey">Sign up</Button>
            </Link>
          </span>
        )}
        <span className="header__btnsBoxTablet">
          <Button className="button--grey">
            <img
              src="/assets/UI/walletBtn.svg"
              alt="wallet_btn"
              width={24}
              height={24}
              className="header__btnImg"
            />
          </Button>
          <Link to="/buyPixels">
            <Button className="button--purple">
              <img
                src="/assets/UI/card.svg"
                alt="wallet_btn"
                width={24}
                height={24}
                className="header__btnImg"
              />
            </Button>
          </Link>
          <div className="hamburger-menu">
            <div className="button--grey"></div>
            <input
              id="Tablet__toggle"
              type="checkbox"
              checked={showMenue}
              onChange={() => setShowMenue(!showMenue)}
            />
            <label className="hamburger-menu__btn" htmlFor="Tablet__toggle">
              <span></span>
            </label>
            <ul className="blockContainer--map__AboutP hamburger-menu__box hamburger-menu__box--tablet">
              <li onClick={() => setShowMenue(false)}>
                <Link className="hamburger-menu__item" to="/statistics">
                  Statistics
                </Link>
              </li>
              <li onClick={() => setShowMenue(false)}>
                <Link className="hamburger-menu__item" to="/market">
                  Market
                </Link>
              </li>
              <li onClick={() => setShowMenue(false)}>
                <Link className="hamburger-menu__item" to="/pixel-map">
                  Pixel Map
                </Link>
              </li>
            </ul>
            <ul className="hamburger-menu__box hamburger-menu__box--phone">
              <div className="hamburger-menu__box__shadow"></div>
              <WidthContainer>
                <h2>Menu</h2>
                <Search />
                {auth ? (
                  <span>
                    <Link onClick={() => setShowMenue(false)}>
                      <Button className="button--grey authBtnMobile">
                        <img
                          src="/assets/components/Header/authPerson.png"
                          alt="wallet_btn"
                          width={30}
                          height={30}
                          className="header__btnImg"
                        />
                      </Button>
                    </Link>
                    <Link to="/buyPixels" onClick={() => setShowMenue(false)}>
                      <Button className="button--purple">
                        <img
                          src="/assets/UI/card.svg"
                          alt="wallet_btn"
                          width={24}
                          height={24}
                          className="header__btnImg"
                        />
                        Buy pixels
                      </Button>
                    </Link>
                  </span>
                ) : (
                  <span>
                    <Link to="/buyPixels" onClick={() => setShowMenue(false)}>
                      <Button className="button--purple">
                        <img
                          src="/assets/UI/card.svg"
                          alt="wallet_btn"
                          width={24}
                          height={24}
                          className="header__btnImg"
                        />
                        Buy pixels
                      </Button>
                    </Link>
                    <Link onClick={() => setShowMenue(false)}>
                      <Button className="button--grey">Login</Button>
                    </Link>
                    <Link onClick={() => setShowMenue(false)}>
                      <Button className="button--grey">Sign up</Button>
                    </Link>
                  </span>
                )}
                <li onClick={() => setShowMenue(false)}>
                  <Link className="hamburger-menu__item" to="/statistics">
                    <Button className="button--grey">Statistics</Button>
                  </Link>
                </li>
                <li onClick={() => setShowMenue(false)}>
                  <Link className="hamburger-menu__item" to="/market">
                    <Button className="button--grey">Market</Button>
                  </Link>
                </li>
                <li onClick={() => setShowMenue(false)}>
                  <Link className="hamburger-menu__item" to="/pixel-map">
                    <Button className="button--grey">Pixel Map</Button>
                  </Link>
                </li>
              </WidthContainer>
            </ul>
          </div>
        </span>
      </WidthContainer>
    </header>
  );
}
export function Logo() {
  return (
    <span className="logo">
      <Link className="logo__link" to={"/"} onClick={() => setShowMenue(false)}>
        <img
          src="/assets/UI/logo.svg"
          alt="logo"
          width={36}
          height={36}
          className="logo__img"
        />
        World Of Crypto
      </Link>
    </span>
  );
}
