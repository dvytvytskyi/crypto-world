import "./title__BegginersGPage.scss";

import BlockContainer from "../../../../components/UI/BlockContainer";
import { useState, useEffect } from "react";
export default function Title__BegginersGPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [imgSrc, setImgSrc] = useState("");
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    if (windowWidth >= 768) setImgSrc("/assets/GuidPage/urBrand.svg");
    else setImgSrc("/assets/GuidPage/urBrand_phone.svg");
  }, [windowWidth]);
  return (
    <section className="artBlock">
      <h1>Begginer`s Guide</h1>
      <p className="artBlock__descr">
        Own a <span className="artBlock__descr textPurple">Pixel</span>, Shape
        the <span className="artBlock__descr textPurple">Virtual World</span>
      </p>
      <div className="begginersGPage__artsBlock">
        <BlockContainer></BlockContainer>
        <BlockContainer className="blockContainer--artwork1">
          <img src="/assets/GuidPage/st1.png" alt="" />
        </BlockContainer>
        <BlockContainer className="blockContainer--grey">
          <h3>Explore the world</h3>
          <p className="missionValues__text">
            section that offers you the opportunity to discover new places and
            see the world through the eyes of those who have visited the most
            amazing places on our planet. Here, you will find
          </p>
        </BlockContainer>
        <BlockContainer className="blockContainer--grey">
          <BlockContainer className="blockContainer--map__AboutP">
            <h4>Buy parts</h4>
            <p>
              Purchase essential parts conveniently in one place to get started
              on your exciting new project.
            </p>
          </BlockContainer>
          <img
            src={imgSrc}
            alt="urBrand"
            className="begginersGPage__urBrandImg"
            width={1041}
            height={436}
          />
          <img
            src="/assets/GuidPage/cntry.svg"
            alt="cntry"
            className="begginersGPage__cntryImg"
            width={393}
            height={276}
          />
          <img
            src="/assets/GuidPage/cubes.svg"
            alt="cubes"
            className="begginersGPage__cubesImg"
            width={151}
            height={151}
          />
          <BlockContainer className="blockContainer--map__AboutP">
            <h4>Own a whole country</h4>
            <p>
              Own a whole country with this exclusive guide to becoming a
              virtual property tycoon. Explore now!
            </p>
          </BlockContainer>
        </BlockContainer>
      </div>
    </section>
  );
}
