import React from "react";
import ItemCount from "./ItemCount";

function CanjeDePuntos(){
    return(
        <div className="CanjeDePuntos">
            <h2>Sistema de canje de puntos</h2>
            <ItemCount initial={1} stock={5} onAdd={0}/>
        </div>
    )
}

export default CanjeDePuntos;