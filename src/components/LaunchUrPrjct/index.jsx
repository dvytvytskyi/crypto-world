import "./launchUrPrjct.scss";

import Button from "../UI/Button";

export default function LaunchUrPrjct() {
  return (
    <section className="launch">
      <img
        src="/assets/Global/metaBall.webp"
        alt="metaBalls"
        className="launch__metaBalls"
        width={410}
        height={410}
      />
      <span className="launch__center">
        <h2 className="launch__title">Launch your project</h2>
        <span className="launch__textBox">
          <h4 className="launch__stitle">With</h4>
          <img
            src="/assets/UI/logo.svg"
            alt="logo"
            className="launch__logo"
            width={36}
            height={36}
          />
          <p className="launch__text">World Of Crypto</p>
        </span>
        <Button className="button--purple">Start Buying</Button>
      </span>
      <img
        src="/assets/Global/cube.webp"
        alt="cube"
        className="launch__cube"
        width={450}
        height={450}
      />
    </section>
  );
}
