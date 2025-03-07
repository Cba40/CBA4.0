import "./IconsProperty1ReglaLapiz.css";

export const IconsProperty1ReglaLapiz = ({
  property1 = "lapiz-tableta",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "icons-property-1-regla-lapiz " + className + " " + variantsClassName
      }
    >
      <div className="akar-icons-edit">
        <img className="group-3" src="group-30.svg" />
      </div>
    </div>
  );
};
