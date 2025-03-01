import "./popup.scss";

export default function Popup({ children, handlerClose, isVisible }) {
  return (
    <div className={`popup ${isVisible && "popup--active"}`}>
      <div className="popup__bgBlur" onClick={handlerClose}></div>
      <div className="popup__contentBox">
        <div className="popup__content">{children}</div>
      </div>
    </div>
  );
}
