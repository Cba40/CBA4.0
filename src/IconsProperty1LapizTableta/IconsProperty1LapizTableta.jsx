import "./IconsProperty1LapizTableta.css";

export const IconsProperty1LapizTableta = ({
  property1 = "lapiz-tableta",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "icons-property-1-lapiz-tableta " + className + " " + variantsClassName
      }
    >
      <div className="akar-icons-edit">
        <img className="group" src="group0.svg" />
      </div>
    </div>
  );
};
