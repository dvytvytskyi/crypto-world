import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";
import "./404Page.scss";

export default function index() {
  return (
    <main className="notFoundPage">
      <div className="notFoundPage__content">
        <h1>404</h1>
        <p>Not Found</p>
      </div>
      <Link to="/">
        <Button className="button--purple">Back to Home</Button>
      </Link>
      <img
        src="/assets/MainPage/capsule.webp"
        alt="capsuleIcon"
        width={217}
        height={217}
        className="notFoundPage__capsule"
      />
      <img
        src="/assets/MainPage/plus.webp"
        alt="plusIcon"
        width={247}
        height={247}
        className="notFoundPage__plus"
      />
      <img
        src="/assets/MainPage/trngl.webp"
        alt="trnglIcon"
        width={165}
        height={165}
        className="notFoundPage__trngl"
      />
      <img
        src="/assets/MainPage/sball.webp"
        alt="sballIcon"
        width={283}
        height={283}
        className="notFoundPage__sball"
      />
      <img
        src="/assets/Global/bublik.webp"
        alt="bublikIcon"
        width={582}
        height={582}
        className="notFoundPage__bublik"
      />
    </main>
  );
}
