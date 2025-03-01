import React from "react";
import BlockContainer from "../../../../components/UI/BlockContainer";
import { useGetTopCompaniesQuery } from "../../../../store/query/analyticsApi/analyticsCompanyStatisticAPI";
import SkeletonLoading from "../../../../components/UI/SkeletonLoading";
import "./Opportunities__MarketP.scss";

const index = ({ mainP = false }) => {
  const data = [
    { totalPixels: 123456, name: "Company A" },
    { totalPixels: 234567, name: "Company B" },
    { totalPixels: 345678, name: "Company C" },
    { totalPixels: 456789, name: "Company D" },
  ];

  const isLoading = false; // Установлено на false, чтобы отключить загрузку
  const isError = false;

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <section className="opportunities__content">
      <h2>World of crypto opportunities</h2>
      <div className="opportunities__content-blocks">
        {isLoading ? (
          <div className="opportunities__content-loader">
            <SkeletonLoading height={435} />
          </div>
        ) : (
          <BlockContainer className="blockContainer--purple">
            <div className="opportunities__blocks-header">
              <h2>
                {data[0].totalPixels
                  .toString()
                  .replace(/,/g, "")
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h2>
              <span className="opportunities__blocks-page">1</span>
            </div>
            <BlockContainer className="blockContainer--artwork opportunities__blocks-body purple">
              <h5>Artwork</h5>
            </BlockContainer>
            <div className="opportunities__blocks-footer">
              <img
                src="/assets/tempImgs/Trident.png"
                alt="Logo"
                width={36}
                height={36}
              />
              <span className="opportunities__blocks-company">
                {data[0].name}
              </span>
            </div>
            <div className="opportunities__blocks-image ">
              <img
                src="/assets/Global/infinity.webp"
                alt="Image background"
                className="opportunities__blocks-img one"
                width={470}
                height={470}
              />
            </div>
          </BlockContainer>
        )}
        {isLoading ? (
          <div className="opportunities__content-loader">
            <SkeletonLoading height={435} />
          </div>
        ) : (
          <BlockContainer className="blockContainer--grey">
            <div className="opportunities__blocks-header">
              <h2>
                {data[1].totalPixels
                  .toString()
                  .replace(/,/g, "")
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h2>
              <span className="opportunities__blocks-page">2</span>
            </div>
            <BlockContainer className="blockContainer--artwork opportunities__blocks-body">
              <h5>Artwork</h5>
            </BlockContainer>
            <div className="opportunities__blocks-footer">
              <img
                src="/assets/tempImgs/Binance.png"
                alt="Logo"
                width={36}
                height={36}
              />
              <span className="opportunities__blocks-company">
                {data[1].name}
              </span>
            </div>
            <div className="opportunities__blocks-image ">
              <img
                src="/assets/Global/cube.webp"
                alt="Image background"
                className="opportunities__blocks-img two"
                width={400}
                height={400}
              />
            </div>
          </BlockContainer>
        )}
        {isLoading ? (
          <div className="opportunities__content-loader">
            <SkeletonLoading height={435} />
          </div>
        ) : (
          <BlockContainer className="blockContainer--grey">
            <div className="opportunities__blocks-header">
              <h2>
                {data[2].totalPixels
                  .toString()
                  .replace(/,/g, "")
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </h2>
              <span className="opportunities__blocks-page">3</span>
            </div>
            <BlockContainer className="blockContainer--artwork opportunities__blocks-body">
              <h5>Artwork</h5>
            </BlockContainer>
            <div className="opportunities__blocks-footer">
              <img
                src="/assets/tempImgs/Tesla.png"
                alt="Logo"
                width={36}
                height={36}
              />
              <span className="opportunities__blocks-company">
                {data[2].name}
              </span>
            </div>
            <div className="opportunities__blocks-image ">
              <img
                src="/assets/Global/honeycomb.webp"
                alt="Image background"
                className="opportunities__blocks-img three"
                width={650}
              />
            </div>
          </BlockContainer>
        )}
        {!mainP && (
          <>
            {isLoading ? (
              <div className="opportunities__content-loader">
                <SkeletonLoading height={435} />
              </div>
            ) : (
              <BlockContainer className="blockContainer--grey">
                <div className="opportunities__blocks-header">
                  <h2>
                    {data[3].totalPixels
                      .toString()
                      .replace(/,/g, "")
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </h2>
                  <span className="opportunities__blocks-page">4</span>
                </div>
                <BlockContainer className="blockContainer--artwork opportunities__blocks-body">
                  <h5>Artwork</h5>
                </BlockContainer>
                <div className="opportunities__blocks-footer">
                  <img
                    src="/assets/tempImgs/Tesla.png"
                    alt="Logo"
                    width={36}
                    height={36}
                  />
                  <span className="opportunities__blocks-company">
                    {data[3].name}
                  </span>
                </div>
                <div className="opportunities__blocks-image ">
                  <img
                    src="/assets/Global/bublik.webp"
                    alt="Image background"
                    className="opportunities__blocks-img four"
                    width={400}
                  />
                </div>
              </BlockContainer>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default index;
