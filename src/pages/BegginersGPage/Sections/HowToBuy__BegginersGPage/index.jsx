import "./howToBuy__BegginersGPage.scss";

import WrldOfOpprtItem from "../../../../components/WrldOfOpprt";
export default function HowToBuy__BegginersGPage() {
  return (
    <section className="begginersGPage__howToBuy">
      <h2 className="begginersGPage__howToBuyTitle">How to Buy?</h2>
      <div className="cryptoOppor__content begginersGPage__howToBuyContent">
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
