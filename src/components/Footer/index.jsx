import "./footer.scss";

import BlockContainer from "../UI/BlockContainer";
import WidthContaier from "../UI/WidthContainer";
import Button from "../UI/Button";
import { Logo } from "../Header";
import { Link } from "react-router-dom";
import { useGetStatsForWorldQuery } from "../../store/query/analyticsApi/analyticsWorldAPI";
import SkeletonLoading from "../UI/SkeletonLoading";
import { useState, useEffect } from "react";

export default function Footer() {
  let response = { data: null, isLoading: false, isError: false };
  const resdata = {
    totalPixels: 1000000, // Примерное значение для totalPixels
    soldPixels: 750000, // Примерное значение для soldPixels
    remainingPixels: 250000, // Примерное значение для remainingPixels
    percentageSold: 75.0, // Примерное значение для percentageSold
  };
  response = { data: resdata, isLoading: false, isError: false };

  const { data, isLoading, isError } = response;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [skeletonHeight, setSkeletonHeight] = useState(0);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    if (windowWidth >= 1440) {
      setSkeletonHeight(244);
    }
    if (windowWidth < 1440 && windowWidth > 768) {
      setSkeletonHeight(220);
    }
    if (windowWidth < 768) {
      setSkeletonHeight(182);
    }
  }, [windowWidth]);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <footer className="footer">
      <WidthContaier>
        {isLoading ? (
          <div className="footer-loader">
            <SkeletonLoading height={skeletonHeight} />
          </div>
        ) : (
          <BlockContainer className="blockContainer--grey">
            <Logo />
            <span className="footer__infoBox">
              <span className="footer__textBox">
                <span className="footer__textBox footer__textBox--strong">
                  {data.totalPixels
                    .toString()
                    .replace(/,/g, "")
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
                Total PixeIs
              </span>
              <span className="footer__textBox">
                <span className="footer__textBox footer__textBox--strong">
                  {data.soldPixels
                    .toString()
                    .replace(/,/g, "")
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
                PixeIs Sold 0ut
              </span>
              <span className="footer__textBox">
                <span className="footer__textBox footer__textBox--strong">
                  {data.remainingPixels
                    .toString()
                    .replace(/,/g, "")
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </span>
                Pixels remaining
              </span>
              <span className="footer__textBox">
                <span className="footer__textBox footer__textBox--strong">
                  {`${data.percentageSold.toFixed(1)}%`}
                </span>
                World Sold Out
              </span>
            </span>
          </BlockContainer>
        )}

        <BlockContainer className="blockContainer--grey">
          <span className="footer__title">About</span>
          <ul className="footer__list">
            <li className="footer__listItem">
              <Link to={"/about"}>Project</Link>
            </li>
            <li className="footer__listItem">
              <a href="#" className="footer__listLink">
                Faq
              </a>
            </li>
            <li className="footer__listItem">
              <a href="#" className="footer__listLink">
                White Paper
              </a>
            </li>
          </ul>
        </BlockContainer>
        <BlockContainer className="blockContainer--grey">
          <span className="footer__title">Support</span>
          <ul className="footer__list">
            <li className="footer__listItem">
              <Link to={"/guide"}>Begginers guide</Link>
            </li>
            <li className="footer__listItem">
              <a href="#" className="footer__listLink">
                Privacy policy
              </a>
            </li>
            <li className="footer__listItem">
              <a href="#" className="footer__listLink">
                Terms of use
              </a>
            </li>
          </ul>
        </BlockContainer>
        <div className="footer__lastBlock">
          <Link to="/countrySteps">
            <Button className="button--purple">Buy pixels</Button>
          </Link>
          <BlockContainer className="blockContainer--grey">
            <span className="footer__title">Communities</span>
            <ul className="footer__list footer__list--last">
              <li className="footer__listItem">
                <a href="#" className="footer__listLink">
                  <img
                    src="/assets/components/Footer/telegram.svg"
                    alt="tg_logo"
                    width={20}
                    height={20}
                    className="footer__listImg"
                  />
                </a>
              </li>
              <li className="footer__listItem">
                <a href="#" className="footer__listLink">
                  <img
                    src="/assets/components/Footer/facebook.svg"
                    alt="fb_logo"
                    width={20}
                    height={20}
                    className="footer__listImg"
                  />
                </a>
              </li>
              <li className="footer__listItem">
                <a href="#" className="footer__listLink">
                  <img
                    src="/assets/components/Footer/reddit.svg"
                    alt="rd_logo"
                    width={20}
                    height={20}
                    className="footer__listImg"
                  />
                </a>
              </li>
              <li className="footer__listItem">
                <a href="#" className="footer__listLink">
                  <img
                    src="/assets/components/Footer/instagram.svg"
                    alt="inst_logo"
                    width={20}
                    height={20}
                    className="footer__listImg"
                  />
                </a>
              </li>
              <li className="footer__listItem">
                <a href="#" className="footer__listLink">
                  <img
                    src="/assets/components/Footer/m.svg"
                    alt="m_logo"
                    width={18}
                    height={18}
                    className="footer__listImg"
                  />
                </a>
              </li>
            </ul>
          </BlockContainer>
        </div>
      </WidthContaier>
    </footer>
  );
}
