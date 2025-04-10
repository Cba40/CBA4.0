import "./Card.css";

export default function Card(){
    return (
        <div>
            <img className="Imagen_Card" src="src\assets\desarrollo_web.jpg" alt="" />
            <h3 className="Titulo_Card">Desarrollo Web</h3>
            <h5 className="Descripcion_Card">Descripcion</h5>
            <p className="Descripcion_Parrafo">
            Creamos sitios web y aplicaciones a medida, desde el diseño hasta la
            programación, para que tu negocio destaque en línea.
            </p>
            <button className="Boton_Card">Mas Informacion</button>
        </div>
    );
}