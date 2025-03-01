import ArtBlock from "../../../../components/ArtBlock";
import BlockContainer from "../../../../components/UI/BlockContainer";
import {
  useGetMarketAmountOfPixelsQuery,
  useGetMarketTotalSellersQuery,
} from "../../../../store/query/analyticsApi/analyticsMarketAPI";
import SkeletonLoading from "../../../../components/UI/SkeletonLoading";
import "./Blocks__MarketP.scss";
import { useState } from "react";
import Button from "../../../../components/UI/Button";
const Blocks__MarketP__BuyMarket = () => {
  const [data1, setData1] = useState(86789); // Данные для количества пикселей
  const [data2, setData2] = useState(1000); // Данные для количества продавцов
  const [isLoading1, setIsLoading1] = useState(false); // Состояние загрузки для data1
  const [isLoading2, setIsLoading2] = useState(false); // Состояние загрузки для data2
  const [isError1, setIsError1] = useState(false); // Ошибка для data1
  const [isError2, setIsError2] = useState(false);

  if (isError1 || isError2) {
    return <div>Error fetching data</div>;
  }

  return (
    <section className="market__blocks">
      <ArtBlock title="Market" top={64} bottom={48}>
        <BlockContainer className="blockContainer--grey">
          <div className="market__blocks-texts">
            <h2>Actions</h2>
            <Button className="button--purple">Buy</Button>
            <Button className="button--grey">sell</Button>
            <div className="market__blocks-image two">
              <img
                src="/assets/Global/circle.webp"
                alt="Image circle"
                className="market__blocks-img two"
              />
            </div>
          </div>
        </BlockContainer>
        {isLoading1 ? (
          <div className="market__blocks-loader">
            <SkeletonLoading height={260} />
          </div>
        ) : (
          <BlockContainer className="blockContainer--purple">
            <div className="market__blocks-texts">
              <h2>
                {data1
                  .toString()
                  .replace(/,/g, "")
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h2>
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
            </div>
          </BlockContainer>
        )}
        {isLoading2 ? (
          <div className="market__blocks-loader">
            <SkeletonLoading height={260} />
          </div>
        ) : (
          <BlockContainer className="blockContainer--grey">
            <div className="market__blocks-texts">
              <h2>
                {data2
                  .toString()
                  .replace(/,/g, "")
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h2>
              <span className="">Total sellers</span>
              <div className="market__blocks-image two">
                <img
                  src="/assets/Global/circle.webp"
                  alt="Image circle"
                  className="market__blocks-img two"
                />
              </div>
            </div>
          </BlockContainer>
        )}
      </ArtBlock>
    </section>
  );
};

export default Blocks__MarketP__BuyMarket;
