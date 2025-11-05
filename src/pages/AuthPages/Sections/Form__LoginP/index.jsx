import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./form__LoginP.scss";

const index = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnded = () => {
      // Плавно зменшуємо opacity відео до 0
      video.style.transition = "opacity 1.5s ease-in-out";
      video.style.opacity = "0";

      // Після fade out приховуємо відео і показуємо логотип
      setTimeout(() => {
        video.style.display = "none";
        // Плавно показуємо логотип
        setShowLogo(true);
      }, 1500);
    };

    const handleError = (e) => {
      console.error("Video error:", e);
      // Якщо відео не завантажилося, приховуємо його і показуємо логотип
      video.style.display = "none";
      setShowLogo(true);
    };

    // Встановлюємо відео
    video.src = "/assets/Global/galaxy.mp4";
    video.load();
    video.style.opacity = "1";

    video.addEventListener("ended", handleEnded);
    video.addEventListener("error", handleError);

    // Запускаємо відтворення після завантаження
    const handleCanPlay = () => {
      video.play().catch((error) => {
        console.error("Error playing video:", error);
      });
    };

    video.addEventListener("canplay", handleCanPlay, { once: true });

    return () => {
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("error", handleError);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  return (
    <section className="formLoginP">
      <div className="formLoginP__background">
        <video
          ref={videoRef}
          className="formLoginP__video"
          autoPlay
          muted
          playsInline
          loop={false}
        />
        <div className="formLoginP__stars"></div>
        {showLogo && (
          <div className="formLoginP__logo">
            <img
              src="/assets/UI/logo.svg"
              alt="Crypto World Logo"
              width={48}
              height={48}
              className="formLoginP__logoImg"
            />
            <span className="formLoginP__logoText">Crypto World</span>
          </div>
        )}
      </div>

      <div className="formLoginP__container">
        <div className="formLoginP__card">
          <h1 className="formLoginP__title">Sign In</h1>
          <p className="formLoginP__subtitle">
            Keep it all together and you'll be fine
          </p>

          <form className="formLoginP__form">
            <div className="formLoginP__inputWrapper">
              <input
                type="email"
                className="formLoginP__input"
                placeholder="Email"
              />
            </div>

            <div className="formLoginP__inputWrapper">
              <input
                type={showPassword ? "text" : "password"}
                className="formLoginP__input"
                placeholder="Password"
              />
              <button
                type="button"
                className="formLoginP__showPassword"
                onClick={() => setShowPassword(!showPassword)}
              >
                Show
              </button>
            </div>

            <Link to="/forgot-password" className="formLoginP__forgotPassword">
              Forgot Password
            </Link>

            <button type="submit" className="formLoginP__submitBtn">
              Sign In
            </button>
          </form>

          <div className="formLoginP__footer">
            <span className="formLoginP__footerText">New to Crypto World </span>
            <Link to="/register" className="formLoginP__footerLink">
              Join Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
