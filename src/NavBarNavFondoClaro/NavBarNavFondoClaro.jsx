import "./NavBarNavFondoClaro.css";

export const NavBarNavFondoClaro = ({
  nav = "fondo-claro",
  className,
  ...props
}) => {
  const variantsClassName = "nav-" + nav;

  return (
    <div
      className={
        "nav-bar-nav-fondo-claro " + className + " " + variantsClassName
      }
    >
      <div className="inicio">Inicio </div>
      <div className="servicios">Servicios </div>
      <div className="nosotros">Nosotros </div>
      <div className="contacto">Contacto </div>
      <div className="redes-sociales">Redes Sociales </div>
    </div>
  );
};
