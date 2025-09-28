import Titile__CountryP from "./Sections/Titile__CountryP";
import RunningLine from "../../components/RunningLine";
import DataTable__CountryP from "./Sections/DataTable__CountryP";
import { useEffect } from "react";

export default function CountryPage() {
  useEffect(() => {
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", "Country Descr");
    document
      .querySelector('meta[property="og:title"]')
      .setAttribute("content", "Country");
    document
      .querySelector('meta[property="og:description"]')
      .setAttribute("content", "Country Descr");
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <Titile__CountryP />
      <RunningLine />
      <DataTable__CountryP />
    </main>
  );
}
