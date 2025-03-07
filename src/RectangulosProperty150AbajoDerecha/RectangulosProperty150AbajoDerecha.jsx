import "./RectangulosProperty150AbajoDerecha.css";

export const RectangulosProperty150AbajoDerecha = ({
  property1 = "50-arriba-izquierda",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "rectangulos-property-150-abajo-derecha " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="rectangle-59"></div>
    </div>
  );
};
