import BlockContainer from "../../UI/BlockContainer";
import "./blocksInfo.scss";
const index = ({ pixelsNumber, countries }) => {
  return (
    <div className="blocksInfo-blocks">
      <BlockContainer className="blockContainer--grey">
        <h5 className="blocksInfo-title">{pixelsNumber}</h5>
        <span className="blocksInfo-descr">Number of pixels selected</span>
      </BlockContainer>
      <BlockContainer className="blockContainer--grey">
        <h5 className="blocksInfo-title">Countries selected</h5>
        <div className="blocksInfo-countries">
          {countries.map((item, index) => (
            <span key={index}>
              <img src={item.flag} alt="Country image" width={16} height={16} />
              <div className="blocksInfo-text">
                {item.country} <span>{item.countryDominance}%</span>
              </div>
            </span>
          ))}
        </div>
      </BlockContainer>
    </div>
  );
};

export default index;
