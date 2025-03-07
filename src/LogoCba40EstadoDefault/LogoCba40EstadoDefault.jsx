import "./LogoCba40EstadoDefault.css";

export const LogoCba40EstadoDefault = ({
  estado = "default",
  className,
  ...props
}) => {
  const variantsClassName = "estado-" + estado;

  return (
    <div
      className={
        "logo-cba-40-estado-default " + className + " " + variantsClassName
      }
    >
      <img className="logocbasb" src="logocbasb0.png" />
    </div>
  );
};
