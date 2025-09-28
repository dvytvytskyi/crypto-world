import "./artBlock.scss";

export default function ArtBlock({ children, title, top, bottom }) {
  return (
    <section className="artBlock">
      <div style={{ marginTop: `${top}px`, marginBottom: `${bottom}px` }}>
        <h1 className="artBlock__title">{title}</h1>
        <p className="artBlock__descr">
          Own a <span className="textPurple">Pixel</span>, Shape the{" "}
          <span className="textPurple">Virtual World</span>
        </p>
      </div>
      <div className="artBlock__content">{children}</div>
    </section>
  );
}
