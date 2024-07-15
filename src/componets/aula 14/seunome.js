import React from "react";

function Seunome({setNome}){

    return(
        <div>
            <p> digite seu nome</p>
            <input type='text' placeholder="Qual é seu nome" onChange={(e) => setNome(e.target.value)}/>
        </div>
    )
}

export default Seunome;

