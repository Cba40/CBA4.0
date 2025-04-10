import "./Main.css";
import SectionPrincipal from "./SectionPrincipal/SectionPrincipal.jsx";
import SectionServicios from "./SectionServicios/SectionServicios.jsx";

export default function Main(){
    return (
        <div>
            <SectionPrincipal/>
            <SectionServicios/>
        </div>
    );
}