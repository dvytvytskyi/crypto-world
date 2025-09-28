import BlockContainer from "../../../../components/UI/BlockContainer";
import ArtBlock from "../../../../components/ArtBlock";
import SkeletonLoading from "../../../../components/UI/SkeletonLoading";
import {
  useGetMarketAmountOfPixelsQuery,
  useGetMarketTotalSellersQuery,
} from "../../../../store/query/analyticsApi/analyticsMarketAPI";
import { useState, useEffect } from "react";
export default function Blocks__MarketP__MarketPreview() {
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
    <section className="market__blocks market__blocks--preview">
      <ArtBlock title="Market" top={64} bottom={48}>
        <BlockContainer className="blockContainer--purple">
          <h2>Wallet</h2>
          <span>
            Click to connect Wallet
            <a href="#">
              <img
                src="/assets/UI/btnArrowSlim.svg"
                alt="btnArrowSlim"
                width={24}
                height={24}
              />
            </a>
          </span>
          <div className="market__blocks-image gem">
            <img
              src="/assets/Global/gem.webp"
              alt="Image gem"
              className="market__blocks-img gem"
              width={305}
              height={305}
            />
          </div>
        </BlockContainer>
        {isLoadingPixels ? (
          <SkeletonLoading height={skeletonHeight} />
        ) : (
          <BlockContainer className="blockContainer--grey">
            <h2>12,313</h2>
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
            <h2>15</h2>
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
        <BlockContainer className="blockContainer--grey">
          <img
            src="/assets/tempImgs/map1.svg"
            alt="country"
            width={770}
            height={288}
          />
        </BlockContainer>
      </ArtBlock>
    </section>
  );
}
