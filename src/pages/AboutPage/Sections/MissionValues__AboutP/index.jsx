import "./missionValues__AboutP.scss";

import BlockContainer from "../../../../components/UI/BlockContainer";

export default function missionValues__AboutP() {
  return (
    <section className="missionValues">
      <BlockContainer className="blockContainer--artwork1">
        <img src="/assets/AboutPage/st1.png" alt="" />
      </BlockContainer>
      <BlockContainer className="blockContainer--grey blur">
        <h3>Our mission</h3>
        <p className="missionValues__text">
          is to provide the necessary assistance and support to the visitors of
          our website. We aim to create a convenient and informative platform
          where everyone can find help in various areas of life.
        </p>
      </BlockContainer>
      <BlockContainer className="blockContainer--grey blur">
        <h3>Our values</h3>
        <p className="missionValues__text">
          is to provide the necessary assistance and support to the visitors of
          our website. We aim to create a convenient and informative platform
          where everyone can find help in various areas of life.
        </p>
      </BlockContainer>
      <BlockContainer className="blockContainer--artwork2">
        <img src="/assets/AboutPage/st2.png" alt="" />
      </BlockContainer>
    </section>
  );
}
