import "./Header.css";
import Encabezado from "./Encabezado/Encabezado.jsx";
import Nav from "./NavBar/Nav.jsx";
import Redes from "./Redes/Redes.jsx";

export default function Header(){
    return (
        <div className="header">   
            <Encabezado/>
            <Nav/>
            <Redes/>
        </div>
    );
}