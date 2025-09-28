import "./wrldOfOpprt.scss";

import BlockContainer from "../UI/BlockContainer";

export default function WrldOfOpprtItem({ img, text, description, number }) {
  return (
    <div className="wrldOfOpprtItem">
      <BlockContainer className="blockContainer--grey">
        <BlockContainer className="blockContainer--artwork">
          <img src={img} alt="" />
        </BlockContainer>
        <span className="wrldOfOpprtItem__titleBox">
          <span className="wrldOfOpprtItem__titleCount">{number}</span>
          <h3 className="wrldOfOpprtItem__title">{text}</h3>
        </span>
        <p className="wrldOfOpprtItem__text">{description}</p>
      </BlockContainer>
    </div>
  );
}
