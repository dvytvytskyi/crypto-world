import "./title__aboutP.scss";

import Button from "../../../../components/UI/Button";
import BlockContainer from "../../../../components/UI/BlockContainer";
import { Link } from "react-router-dom";

export default function Title__AboutP() {
  return (
    <section className="titleAboutP">
      <div className="titleAboutP__center">
        <h1>
          About <br />
          World Of Crypto
        </h1>
        <span className="titleAboutP__text">
          Own a <span className="textPurple">Pixel</span>, Shape the{" "}
          <span className="textPurple">Virtual World</span>
        </span>
        <span className="titleAboutP__btnBox">
          <Link to={"/guide"}>
            <Button className="button--gradientBorder">Beginners guide</Button>
          </Link>
          <Button className="button--purple">Buy The World</Button>
        </span>
      </div>
    </section>
  );
}
