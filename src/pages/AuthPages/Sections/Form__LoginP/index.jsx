import React from "react";
import BlockContainer from "../../../../components/UI/BlockContainer";
import { Link } from "react-router-dom";
import Button from "../../../../components/UI/Button";
import "./form__LoginP.scss";

const index = () => {
  return (
    <section className="formLoginP">
      <div className="formRegisterP">
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
                <h1 className="formRegisterP__content-title">Log in</h1>
                <div className="formRegisterP__content-linkWrapper">
                  <p className="formRegisterP__content-descr">
                    Not have an account?
                  </p>
                  <Link to="/register" className="formRegisterP__content-link">
                    Register
                  </Link>
                </div>
              </div>
              <div className="formRegisterP__content-form">
                <div className="formRegisterP__content-inputWrapper">
                  <input
                    type="text"
                    className="formRegisterP__content-input"
                    placeholder="Username"
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
              <Button className="button--purple">
                Log in{" "}
                <img
                  src="/assets/UI/btnArrow.svg"
                  alt="Image arrow"
                  width={15}
                  height={15}
                />
              </Button>
            </div>
          </BlockContainer>
        </div>
      </div>
    </section>
  );
};

export default index;
