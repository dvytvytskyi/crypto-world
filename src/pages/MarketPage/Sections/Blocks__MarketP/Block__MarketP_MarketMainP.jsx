import { Link } from "react-router-dom";
import ArtBlock from "../../../../components/ArtBlock";
import BlockContainer from "../../../../components/UI/BlockContainer";
import Button from "../../../../components/UI/Button";
import "./Blocks__MarketP.scss";
import {
  useGetMarketAmountOfPixelsQuery,
  useGetMarketTotalSellersQuery,
} from "../../../../store/query/analyticsApi/analyticsMarketAPI";
import SkeletonLoading from "../../../../components/UI/SkeletonLoading";
import { useState, useEffect } from "react";

export default function Block__MarketP_MarketMainP() {
  const [skeletonHeight, setSkeletonHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const {
    data: dataPixels,
    isLoading: isLoadingPixels,
    isError: isErrorPixels,
  } = useGetMarketAmountOfPixelsQuery();
  const {
    data: dataSellers,
    isLoading: isLoadingSellers,
    isError: isErrorSellers,
  } = useGetMarketTotalSellersQuery();
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if (windowWidth >= 1440) setSkeletonHeight(260);
    if (windowWidth < 1440 && windowWidth > 768) setSkeletonHeight(173);
    if (windowWidth < 768) setSkeletonHeight(94);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

  return (
    <section className="market__blocks">
      <ArtBlock title="Market">
        <BlockContainer className="blockContainer--grey">
          <h3>Actions</h3>
          <span>
            <Link to="/buyPixels">
              <Button className="button--purple">Buy</Button>
            </Link>
            <Link to="/marketPreview">
              <Button className="button--grey">Sell</Button>
            </Link>
          </span>
          <div className="market__blocks-image gem2">
            <img
              src="/assets/Global/gem.webp"
              alt="Image circle"
              className="market__blocks-img gem2"
              height={420}
              width={420}
            />
          </div>
        </BlockContainer>
        {isLoadingPixels ? (
          <SkeletonLoading height={skeletonHeight} />
        ) : (
          <BlockContainer className="blockContainer--grey">
            <h2>1,355,840</h2>
            <span className="">Pixels for Sale</span>
            <div className="market__blocks-image one">
              <img
                src="/assets/Global/plane.webp"
                alt="Image plane"
                className="market__blocks-img one"
                width={320}
                height={250}
              />
            </div>
          </BlockContainer>
        )}
        {isLoadingSellers ? (
          <SkeletonLoading height={skeletonHeight} />
        ) : (
          <BlockContainer className="blockContainer--grey">
            <h2>148</h2>
            <span className="">Total sellers</span>
            <div className="market__blocks-image two">
              <img
                src="/assets/Global/circle.webp"
                alt="Image circle"
                className="market__blocks-img two"
              />
            </div>
          </BlockContainer>
        )}
        <div className="big_art"></div>
      </ArtBlock>
    </section>
  );
}
