import "./button.scss";

export default function Button({ children, handler, className }) {
  return (
    <button onClick={handler} className={`button ${className}`}>
      {children}
    </button>
  );
}
