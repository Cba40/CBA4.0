import "./SectionPrincipal.css";
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