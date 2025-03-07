import "./Frame5Property1ModoClaro.css";

export const Frame5Property1ModoClaro = ({
  property1 = "modo-claro",
  text = "Scroll Down",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "frame-5-property-1-modo-claro " + className + " " + variantsClassName
      }
    >
      <div className="scroll-down">{text} </div>
      <img className="ornament-43" src="ornament-430.svg" />
    </div>
  );
};
