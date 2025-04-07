import  "./Redes.css";
import linkeding from "../../../assets/linkedin.png";
import facebook from "../../../assets/facebook.png";
import instagram from "../../../assets/instagram.png";
import whatsapp from "../../../assets/whatsapp.png";

export default function Redes(){
    return (
        <div className="redes_sociales">
            <img src={linkeding} className="iconos" alt="Linkeding"/>
            <img src={facebook} className="iconos" alt="Facebook"/>
            <img src={instagram} className="iconos" alt="Instagram"/>
            <img src={whatsapp} className="iconos" alt="Whatsapp"/>
        </div>
    );
}