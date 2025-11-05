import React from "react";
import { Link } from "react-router-dom";
import "./form__ForgotPassword.scss";

const index = () => {
  return (
    <section className="formForgotPassword">
      <div className="formForgotPassword__background">
        <div className="formForgotPassword__stars"></div>
        <div className="formForgotPassword__logo">
          <img
            src="/assets/UI/logo.svg"
            alt="Crypto World Logo"
            width={48}
            height={48}
            className="formForgotPassword__logoImg"
          />
          <span className="formForgotPassword__logoText">Crypto World</span>
        </div>
      </div>

      <div className="formForgotPassword__container">
        <div className="formForgotPassword__card">
          <h1 className="formForgotPassword__title">Forgot Password</h1>
          <p className="formForgotPassword__subtitle">
            Enter your email address and we'll send you a link to reset your
            password
          </p>

          <form className="formForgotPassword__form">
            <div className="formForgotPassword__inputWrapper">
              <input
                type="email"
                className="formForgotPassword__input"
                placeholder="Email"
              />
            </div>

            <button type="submit" className="formForgotPassword__submitBtn">
              Send Reset Link
            </button>
          </form>

          <div className="formForgotPassword__footer">
            <span className="formForgotPassword__footerText">
              Remember your password?{" "}
            </span>
            <Link to="/login" className="formForgotPassword__footerLink">
              Log in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
