import "./virtRealms__MainP.scss";

import BlockContainer from "../../../../components/UI/BlockContainer";

export default function VirtRealms__MainP() {
  return (
    <section className="virtRealms">
      <BlockContainer className="blockContainer--purple">
        <h3 className="virtRealms__leftTitle">Unlocking Virtual Realms</h3>
        <img
          src="/assets/MainPage/capsule.webp"
          alt="capsule"
          height={118}
          width={118}
          className="virtRealms__leftCapsule"
        />
        <img
          src="/assets/Global/gem.webp"
          alt="gem"
          height={344}
          width={344}
          className="virtRealms__leftGem"
        />
        <img
          src="/assets/MainPage/trngl.webp"
          alt="trngl"
          height={128}
          width={128}
          className="virtRealms__leftTrngl"
        />
        <img
          src="/assets/MainPage/plus.webp"
          alt="plus"
          height={208}
          width={208}
          className="virtRealms__leftX"
        />
        <img
          src="/assets/Global/bublik.webp"
          alt="0"
          height={280}
          width={280}
          className="virtRealms__left0"
        />
        <img
          src="/assets/MainPage/sball.webp"
          alt="sball"
          height={176}
          width={176}
          className="virtRealms__leftSball"
        />
      </BlockContainer>
      <BlockContainer className="blockContainer--grey">
        <h4 className="virtRealms__rightTitle">NFT-Pixel Opportunities</h4>
        <p className="virtRealms__rightText">
          Own and trade unique virtual plots in the digital world, making them
          your exclusive property
        </p>
      </BlockContainer>
      <BlockContainer className="blockContainer--grey">
        <h4 className="virtRealms__rightTitle">Creative Potential</h4>
        <p className="virtRealms__rightText">
          Use NFT pixels to create unique virtual art, bringing your creative
          ideas to life in the digital realm
        </p>
      </BlockContainer>
      <BlockContainer className="blockContainer--grey">
        <h4 className="virtRealms__rightTitle">Investment Possibilities</h4>
        <p className="virtRealms__rightText">
          Explore opportunities to invest in appreciating digital assets,
          potentially valuable in the future
        </p>
      </BlockContainer>
      <BlockContainer className="blockContainer--grey">
        <h4 className="virtRealms__rightTitle">Social Interaction</h4>
        <p className="virtRealms__rightText">
          Interact within the community, creating and trading unique virtual
          spaces for an exclusive experience
        </p>
      </BlockContainer>
    </section>
  );
}
