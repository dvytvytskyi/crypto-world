import "./container.scss";
//Это просто контейнер который устанавливает максимальную ширину  1344px
export default function WidthContainer({ children, className }) {
  return <div className={`container ${className}`}>{children}</div>;
}
