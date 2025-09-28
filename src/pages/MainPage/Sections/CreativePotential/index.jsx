import "./creativePotential_MainP.scss";

import BlockContainer from "../../../../components/UI/BlockContainer";
import Button from "../../../../components/UI/Button";

export default function creativePotential__MainP() {
  return (
    <section className="creativePotential">
      <div className="creative_potential_block">
        <img
          className="main_img"
          src="/assets/MainPage/CreativePotential.png"
          alt=""
        />
        <div className="content">
          <div className="content_item">
            <div className="header">
              <p>Creative Potential</p>
              <Button className="button--blurGrey">
                Buy
                <img
                  src="/assets/UI/btnArrowSlim.svg"
                  alt="slimArrow"
                  width={20}
                  height={20}
                />
              </Button>
            </div>
            <div className="content">
              Use NFT pixels to create unique virtual art, bringing your
              creative ideas to life in the digital realm
            </div>
          </div>
          <div className="content_item">
            <div className="header">
              <p>Social Interaction</p>
              <Button className="button--blurGrey">
                Buy
                <img
                  src="/assets/UI/btnArrowSlim.svg"
                  alt="slimArrow"
                  width={20}
                  height={20}
                />
              </Button>
            </div>
            <div className="content">
              Interact within the community, creating and trading unique virtual
              spaces for an exclusive experience
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
