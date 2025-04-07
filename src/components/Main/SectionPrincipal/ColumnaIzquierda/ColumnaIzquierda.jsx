import "./ColumnaIzquierda.css";

export default function ColumnaIzquierda() {
    return (
        <div className="Columna_Izquierda">
            <h1 className="Titulo_Izquierda">
                Soluciones
                <br/>
                Digitales
            </h1>
            <p className="Parrafo_Izquierda">
                Transformamos tus ideas en realidades digitales.
            </p>
            <button className="Boton_Izquierda">
                <a className="Texto_Boton_Izquierda" f="#">Conoce Nuestros Servicios</a>
                <i className="material-symbols-outlined">north_east</i>
            </button>
            <ul className="Lista_Izquierda">
                <li className="Circulo_Izquierda"></li>
                <li className="Circulo_Izquierda"></li>
                <li className="Circulo_Izquierda"></li>
            </ul>
        </div>
    );
}