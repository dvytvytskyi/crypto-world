import VirtRealms__MainP from "./Sections/VirtRealms__MainP";
import WidthContainer from "../../components/UI/WidthContainer";
import Country__MainP from "./Sections/Country__MainP";
import { useEffect } from "react";

import CreativePotential__MainP from "./Sections/CreativePotential/index";
export default function MainPage() {
  useEffect(() => {
    document.title = "Crypto World";
    document
      .querySelector('meta[name="description"]')
      .setAttribute(
        "content",
        "Own and trade unique virtual plots in the digital world, making them your exclusive property"
      );
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", "Crypto World");
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute(
        "content",
        "Own and trade unique virtual plots in the digital world, making them your exclusive property"
      );
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="mainPage">
      <Country__MainP />
      <WidthContainer>
        <CreativePotential__MainP />
        <VirtRealms__MainP />
      </WidthContainer>
    </main>
  );
}
