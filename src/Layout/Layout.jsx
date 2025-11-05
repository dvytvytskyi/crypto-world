import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Alert from "../components/UI/Alert";
import { useSelector } from "react-redux";

export default function Layout() {
  const alert = useSelector((state) => state.alert);
  const location = useLocation();
  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/forgot-password";

  useEffect(() => {
    document.getElementById("loader__box").style.display = "none";
  }, []);

  return (
    <>
      {!isAuthPage && <Header />}
      <Alert text={alert.alertText} type={alert.alertType} />
      <Outlet />
      {!isAuthPage && <Footer />}
    </>
  );
}
