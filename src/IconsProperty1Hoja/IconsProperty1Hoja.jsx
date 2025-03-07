import "./IconsProperty1Hoja.css";

export const IconsProperty1Hoja = ({
  property1 = "lapiz-tableta",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={"icons-property-1-hoja " + className + " " + variantsClassName}
    >
      <div className="akar-icons-edit">
        <div className="akar-icons-file">
          <img className="group" src="group0.svg" />
        </div>
      </div>
    </div>
  );
};
