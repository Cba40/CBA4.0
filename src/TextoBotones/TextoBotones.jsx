import "./TextoBotones.css";

export const TextoBotones = ({
  text = "Our Projects ",
  className,
  ...props
}) => {
  return (
    <div className={"texto-botones " + className}>
      <div className="texto-botones2">{text} </div>
    </div>
  );
};
