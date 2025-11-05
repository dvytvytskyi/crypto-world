import Layout from "./Layout/Layout";
import BegginersGPage from "./pages/BegginersGPage";
import StatisticsPage from "./pages/StatisticsPage";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import HallOfFamePage from "./pages/HallOfFamePage";
import BuyMarket from "./pages/MarketPage/BuyMarket";
import MarketMain from "./pages/MarketPage/MarketMain";
import MarketPreview from "./pages/MarketPage/MarketPreview";
import CountryPage from "./pages/CountryPage";
import CountriesPage from "./pages/CountriesPage";
import PixelsStepsPage from "./pages/StepsPage/pixelsSteps";
import CountryStepsPage from "./pages/StepsPage/countrySteps";
import PixelMapPage from "./pages/PixelMapPage";
import NotfoundPage from "./pages/404Page";
import RegisterPage from "./pages/AuthPages/register";
import LoginPage from "./pages/AuthPages/login";
import ForgotPasswordPage from "./pages/AuthPages/forgotPassword";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MyAccountPage from "./pages/MyAccountPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="guide" element={<BegginersGPage />} />
      <Route path="statistics" element={<StatisticsPage />} />
      <Route path="hallOfFame" element={<HallOfFamePage />} />
      <Route path="country">
        <Route index element={<CountriesPage />} />
        <Route path=":id" element={<CountryPage />} />
      </Route>
      <Route path="buyMarket" element={<BuyMarket />} />
      <Route path="market" element={<MarketMain />} />
      <Route path="marketPreview" element={<MarketPreview />} />
      <Route path="buyPixels" element={<PixelsStepsPage />} />
      <Route path="countrySteps" element={<CountryStepsPage />} />
      <Route path="pixel-map" element={<PixelMapPage />} />
      <Route path="myAccount" element={<MyAccountPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="forgot-password" element={<ForgotPasswordPage />} />
      <Route path="*" element={<NotfoundPage />} />
    </Route>
  )
);

export default router;
