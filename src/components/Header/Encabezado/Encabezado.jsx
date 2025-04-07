import "./Encabezado.css";
import logo from "../../../assets/logocba.png";

export default function Encabezado(){

    return (
        <div className="encabezado">
            <img src={logo} className="logo" alt="CBA4.0" />
            <section className="texto_encabezado">CBA4.0</section>
        </div>
    );
}