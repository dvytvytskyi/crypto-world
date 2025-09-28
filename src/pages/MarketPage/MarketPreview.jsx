import WidthContainer from "../../components/UI/WidthContainer";
import Blocks__MarketP__MarketPreview from "./Sections/Blocks__MarketP/Blocks__MarketP__MarketPreview";
import { useEffect } from "react";
import OrderDetails__MarketP from "./Sections/OrderDetails__MarketP";

export default function MarketPreview() {
  useEffect(() => {
    document.title = "Market Preview";
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", "Market Preview Descr");
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", "Market Preview");
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute("content", "Market Preview Descr");
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <WidthContainer>
        <Blocks__MarketP__MarketPreview />
        <OrderDetails__MarketP />
      </WidthContainer>
    </main>
  );
}
