import "./changeDataAndStats__MyAccountPage.scss";
import BlockContainer from "../../../../components/UI/BlockContainer";
import Button from "../../../../components/UI/Button";
import countryFlag from "../../../../mapData/countryFlag.json";

export default function ChangeDataAndStats__MyAccountPage() {
  return (
    <section className="changeDataAndStats__MyAccountPage">
      <div className="formRegisterP__content">
        <BlockContainer className="blockContainer--purple">
          <img
            className="formRegisterP__content-img"
            src="/assets/Global/cube.webp"
            alt="Image cube"
            width={267}
            height={267}
          />
          <img
            className="formRegisterP__content-img"
            src="/assets/Global/metaBall.webp"
            alt="Image metaBall"
            width={245}
            height={245}
          />
          <img
            className="formRegisterP__content-img"
            src="/assets/Global/gem.webp"
            alt="Image gem"
            width={305.52}
            height={305.52}
          />
          <img
            className="formRegisterP__content-img"
            src="/assets/Global/halfCircle.webp"
            alt="Image halfCircle"
            width={190.19}
            height={190.19}
          />
          <div className="formRegisterP__content-texts">
            <img
              src="/assets/UI/logo.svg"
              alt="Image logo"
              width={23}
              height={23}
            />
            <span>World Of Crypto</span>
          </div>
          <div className="formRegisterP__content-btnWrapper">
            <Button className="formRegisterP__content-btn">
              Own a Pixel, Shape the Virtual World
            </Button>
          </div>
        </BlockContainer>
        <BlockContainer>
          <div className="formRegisterP__content-formWrapper">
            <div className="formRegisterP__content-formTexts">
              <h1 className="formRegisterP__content-title">Personal account</h1>
            </div>
            <div className="formRegisterP__content-form">
              <div className="formRegisterP__content-inputWrapper">
                <input
                  type="text"
                  className="formRegisterP__content-input"
                  placeholder="E-mail address"
                />
                <img
                  src="/assets/RegisterPage/mail.svg"
                  alt="Image concierge"
                  width={24}
                  height={24}
                />
              </div>
              <div className="formRegisterP__content-inputWrapper">
                <input
                  type="text"
                  className="formRegisterP__content-input"
                  placeholder="Password"
                />
                <img
                  src="/assets/RegisterPage/key.svg"
                  alt="Image concierge"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <Button className="button--purple">Edit</Button>
          </div>
        </BlockContainer>
      </div>
      <div className="changeDataAndStats__MyAccountPage__stats">
        <BlockContainer className="blockContainer--grey">
          <h2>12,500 px</h2>
          <p>Number of pixels I own</p>
        </BlockContainer>
        <BlockContainer className="blockContainer--grey">
          <h2>Top countries I own</h2>
          <div className="changeDataAndStats__MyAccountPage__topCountryBox">
            <TopCountryItem country="USA" prosent="20" />
            <TopCountryItem country="Ukraine" prosent="20" />
            <TopCountryItem country="Japan" prosent="20" />
            <TopCountryItem country="Canada" prosent="20" />
          </div>
        </BlockContainer>
      </div>
    </section>
  );
}
function TopCountryItem({ country, prosent }) {
  const flag = countryFlag.find((item) => item.name === country);
  return (
    <div className="changeDataAndStats__MyAccountPage__topCountryItem">
      <img src={flag.flag_1x1} alt="county flag" width={24} height={24} />
      <p>
        {country} {prosent}%
      </p>
    </div>
  );
}
