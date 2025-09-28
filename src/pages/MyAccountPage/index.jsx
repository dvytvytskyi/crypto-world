import { useEffect } from "react";
import Table__StatisticsP from "../StatisticsPage/Sections/Table__StatisticsP";
import ChangeDataAndStats__MyAccountPage from "./Sections/ChangeDataAndStats__MyAccountPage";
import WidthContainer from "../../components/UI/WidthContainer";
import Table__MyAccountP from "./Sections/Table__MyAccountP";

export default function MyAccountPage() {
  useEffect(() => {
    document.title = "My Account";
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="myAccountWrapper">
      <WidthContainer>
        {" "}
        <ChangeDataAndStats__MyAccountPage />
        <Table__MyAccountP />
        <Table__StatisticsP />
      </WidthContainer>
    </main>
  );
}
