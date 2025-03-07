import "./IconsProperty1Monitor.css";

export const IconsProperty1Monitor = ({
  property1 = "lapiz-tableta",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={
        "icons-property-1-monitor " + className + " " + variantsClassName
      }
    >
      <div className="akar-icons-edit">
        <div className="akar-icons-desktop-device">
          <img className="group-4" src="group-40.svg" />
        </div>
      </div>
    </div>
  );
};
