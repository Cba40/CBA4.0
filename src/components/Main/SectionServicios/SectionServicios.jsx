import "./SectionServicios.css";
import Card from "./Card/Card.jsx";

export default function SectionServicios(){
    return (
        <div className="Servicios_Servicios">
            <h2 className="Nuestros_Servicios">Nuestros Servicios</h2>
            <section className="Servicios_Cards">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </section>
        </div>
    );
}