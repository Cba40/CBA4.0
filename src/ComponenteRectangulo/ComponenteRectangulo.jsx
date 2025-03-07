import "./ComponenteRectangulo.css";
import { RectangulosProperty150ArribaIzquierda } from "../RectangulosProperty150ArribaIzquierda/RectangulosProperty150ArribaIzquierda.jsx";
import { IconsProperty1LapizTableta } from "../IconsProperty1LapizTableta/IconsProperty1LapizTableta.jsx";
import { BotonProperty1Base } from "../BotonProperty1Base/BotonProperty1Base.jsx";

export const ComponenteRectangulo = ({
  component = <BotonProperty1Base property1="base" />,
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A consequat nunc id purus pretium sagittis diam quis massa. Nulla ridiculus nullam bibendum luctus viverra. Eu pellentesque sem sed platea diam dignissim duis purus. ",
  text2 = "undefined",
  text3 = "Content Writing",
  className,
  ...props
}) => {
  return (
    <div className={"componente-rectangulo " + className}>
      <RectangulosProperty150ArribaIzquierda className="rectangulos-instance"></RectangulosProperty150ArribaIzquierda>
      <div className="contenido-rectangulos">
        <IconsProperty1LapizTableta className="icons-instance"></IconsProperty1LapizTableta>
        <div className="content-writing">{text3} </div>
        <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-a-consequat-nunc-id-purus-pretium-sagittis-diam-quis-massa-nulla-ridiculus-nullam-bibendum-luctus-viverra-eu-pellentesque-sem-sed-platea-diam-dignissim-duis-purus">
          {text}{" "}
        </div>
        {component}
      </div>
    </div>
  );
};
