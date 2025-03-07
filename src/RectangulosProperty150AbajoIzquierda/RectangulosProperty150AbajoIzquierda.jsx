import "./RectangulosProperty150AbajoIzquierda.css";

export const RectangulosProperty150AbajoIzquierda = ({
  property1 = "50-arriba-izquierda",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "rectangulos-property-150-abajo-izquierda " +
        className +
        " " +
        variantsClassName
      }
    >
      <div className="rectangle-59"></div>
    </div>
  );
};
