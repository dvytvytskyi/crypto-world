import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import Alert from "../components/UI/Alert";
import { useSelector } from "react-redux";

export default function Layout() {
  const alert = useSelector((state) => state.alert);
  useEffect(() => {
    document.getElementById("loader__box").style.display = "none";
  }, []);
  return (
    <>
      <Header />
      <Alert text={alert.alertText} type={alert.alertType} />
      <Outlet />
      <Footer />
    </>
  );
}
