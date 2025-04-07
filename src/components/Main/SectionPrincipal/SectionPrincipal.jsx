import "./SectionPrincipal.css";
import "./ColumnaIzquierda/ColumnaIzquierda.jsx";
import ColumnaDerecha from "./ColumnaDerecha/ColumnaDerecha.jsx";
import ColumnaIzquierda from "./ColumnaIzquierda/ColumnaIzquierda.jsx";

export default function SectionPrincipal(){
    return (
        <div className="Section_Principal">
            
            <ColumnaIzquierda/>
            <ColumnaDerecha/>
            
        </div>
    );
}