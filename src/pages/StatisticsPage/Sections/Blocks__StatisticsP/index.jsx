import React from "react";
import SectionHeader from "../../../../components/SectionHeader";
import Button from "../../../../components/UI/Button";
import BlockContainer from "../../../../components/UI/BlockContainer";
import { useGetTopCompaniesQuery } from "../../../../store/query/analyticsApi/analyticsCompanyStatisticAPI";
import SkeletonLoading from "../../../../components/UI/SkeletonLoading";
import "./Blocks__StatisticsP.scss";

const index = () => {
  const data = [
    {
      img: "/assets/tempImgs/Binance.png",
      name: "Binance",
      totalPixels: 1000000,
    },
    {
      img: "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg",
      name: "Google",
      totalPixels: 750000,
    },
    {
      img: "https://miro.medium.com/v2/resize:fit:1400/1*cO7zcspeBASnfjFY6PAlgw.jpeg",
      name: "Fiverr",
      totalPixels: 500000,
    },
  ];

  const isLoading = false; // Setting loading state to false since we're using mock data
  const isError = false;

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <section className="statistickPage">
      <SectionHeader title="World of crypto owners" btn />
      <div className="">
        {isLoading ? (
          <div className="statistickPage__diagrams-loader">
            <SkeletonLoading height={232} />
            <SkeletonLoading height={232} />
            <SkeletonLoading height={232} />
          </div>
        ) : (
          <div className="statistickPage__content-blocks">
            {data.map((item, index) => (
              <BlockContainer className="blockContainer--grey" key={index}>
                <div className="statistickPage__content-wrapper">
                  <div className="statistickPage__content-texts">
                    <div className="statistickPage__list-header">
                      <img
                        src={item.img}
                        alt="Trident image"
                        className="statistickPage__list-img"
                        width={48}
                        height={48}
                      />
                      <span className="statistickPage__list-title">
                        {item.name}
                      </span>
                    </div>
                    <div className="statistickPage__list-bottom">
                      <div className="statistickPage__list-bottomTexts">
                        <span className="statistickPage__list-price">
                          {item.totalPixels
                            .toString()
                            .replace(/,/g, "")
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>
                        <span className="statistickPage__list-area">
                          Area owned
                        </span>
                      </div>
                      <div className="statistickPage__list-buttons">
                        <Button className="button--blurGrey">
                          Visit
                          <img
                            src="/assets/UI/btnArrow.svg"
                            alt="Img button arrow"
                            className="tatistickPage__list-img"
                            width={16}
                            height={16}
                          />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`statistickPage__list-imgOverflow img${
                      index + 1
                    }`}
                  >
                    <img
                      src={
                        index === 0
                          ? "/assets/Global/metaBall.webp"
                          : index === 1
                          ? "/assets/Global/gem.webp"
                          : "/assets/Global/honeycomb.webp"
                      }
                      alt="Image background"
                      className={`statistickPage__list-image img${index + 1}`}
                      width={index === 0 ? 235 : index === 1 ? 260 : 280}
                      height={index === 0 ? 250 : index === 1 ? 280 : 290}
                    />
                  </div>
                </div>
              </BlockContainer>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default index;
