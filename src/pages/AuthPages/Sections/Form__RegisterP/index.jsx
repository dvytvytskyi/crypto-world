import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./form__RegisterP.scss";

const index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className="formRegisterP">
      <div className="formRegisterP__background">
        <div className="formRegisterP__stars"></div>
        <div className="formRegisterP__logo">
          <img
            src="/assets/UI/logo.svg"
            alt="Crypto World Logo"
            width={48}
            height={48}
            className="formRegisterP__logoImg"
          />
          <span className="formRegisterP__logoText">Crypto World</span>
        </div>
      </div>

      <div className="formRegisterP__container">
        <div className="formRegisterP__card">
          <h1 className="formRegisterP__title">Sign Up</h1>
          <p className="formRegisterP__subtitle">
            Join us and start your crypto journey
          </p>

          <form className="formRegisterP__form">
            <div className="formRegisterP__inputWrapper">
              <input
                type="text"
                className="formRegisterP__input"
                placeholder="Username"
              />
            </div>

            <div className="formRegisterP__inputWrapper">
              <input
                type="email"
                className="formRegisterP__input"
                placeholder="Email"
              />
            </div>

            <div className="formRegisterP__inputWrapper">
              <input
                type={showPassword ? "text" : "password"}
                className="formRegisterP__input"
                placeholder="Password"
              />
              <button
                type="button"
                className="formRegisterP__showPassword"
                onClick={() => setShowPassword(!showPassword)}
              >
                Show
              </button>
            </div>

            <div className="formRegisterP__inputWrapper">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="formRegisterP__input"
                placeholder="Re-enter Password"
              />
              <button
                type="button"
                className="formRegisterP__showPassword"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                Show
              </button>
            </div>

            <button type="submit" className="formRegisterP__submitBtn">
              Sign Up
            </button>
          </form>

          <div className="formRegisterP__footer">
            <span className="formRegisterP__footerText">
              Already have an account?{" "}
            </span>
            <Link to="/login" className="formRegisterP__footerLink">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
