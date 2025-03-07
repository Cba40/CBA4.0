import "./BotonProperty1Base.css";
import { TextoBotones } from "../TextoBotones/TextoBotones.jsx";
import { IconosProperty1Flecha } from "../IconosProperty1Flecha/IconosProperty1Flecha.jsx";

export const BotonProperty1Base = ({
  property1 = "base",
  text = "undefined",
  className,
  ...props
}) => {
  const variantsClassName = "property-1-" + property1;

  return (
    <div
      className={"boton-property-1-base " + className + " " + variantsClassName}
    >
      <TextoBotones
        text="Our Projects "
        className="texto-botones-instance"
      ></TextoBotones>
      <IconosProperty1Flecha className="iconos-instance"></IconosProperty1Flecha>
    </div>
  );
};
