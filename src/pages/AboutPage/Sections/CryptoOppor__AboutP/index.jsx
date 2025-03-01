import "./cryptoOppor__AboutP.scss";

import WrldOfOpprtItem from "../../../../components/WrldOfOpprt";

export default function CryptoOppor__AboutP() {
  return (
    <section className="cryptoOppor">
      <h2 className="cryptoOppor__title">World of crypto opportunities</h2>
      <div className="cryptoOppor__content">
        <WrldOfOpprtItem
          img={"/assets/GuidPage/st2.png"}
          text={"Select"}
          description={"Select Your Pixel in country"}
          number={1}
        />
        <WrldOfOpprtItem
          img={"/assets/GuidPage/st3.png"}
          text={"Enter"}
          description={"Enter Pixel to Purchase"}
          number={2}
        />
        <WrldOfOpprtItem
          img={"/assets/GuidPage/st4.png"}
          text={"Preview"}
          description={"Preview pixel to buy"}
          number={3}
        />
        <WrldOfOpprtItem
          img={"/assets/GuidPage/st5.png"}
          text={"Buy"}
          description={"enter data to purchase a pixel"}
          number={4}
        />
      </div>
    </section>
  );
}
