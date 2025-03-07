import "./IconosProperty1Flecha.css";

export const IconosProperty1Flecha = ({
  property1 = "flecha",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <img
      className={
        "iconos-property-1-flecha " + className + " " + variantsClassName
      }
      src="iconos-property-1-flecha.svg"
    />
  );
};
