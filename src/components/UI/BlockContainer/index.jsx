import "./blockContainer.scss";

//этот компонент устанавливает дефолтные стили для блока, цвет шейп и тд
export default function BlockContainer({ children, className }) {
  return <div className={`blockContainer ${className}`}><div>{children}</div></div>;
}
