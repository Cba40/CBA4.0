import "./RectangulosProperty150ArribaDerecha.css";

export const RectangulosProperty150ArribaDerecha = ({
  property1 = "50-arriba-izquierda",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "rectangulos-property-150-arriba-derecha " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="rectangle-59"></div>
    </div>
  );
};
