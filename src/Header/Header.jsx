import "./Header.css";
import { LogoCba40EstadoDefault } from "../LogoCba40EstadoDefault/LogoCba40EstadoDefault.jsx";
import { NavBarNavFondoClaro } from "../NavBarNavFondoClaro/NavBarNavFondoClaro.jsx";

export const Header = ({ className, ...props }) => {
  return (
    <div className={"header " + className}>
      <LogoCba40EstadoDefault className="logo-cba-4-0-instance"></LogoCba40EstadoDefault>
      <NavBarNavFondoClaro className="nav-bar-instance"></NavBarNavFondoClaro>
    </div>
  );
};
