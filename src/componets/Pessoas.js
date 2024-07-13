function Pessoas({nome,idade,profissao,foto}){
    return(
        <div>
            <img scr={foto} alt={nome}/>
            <h2>Nome:{nome} </h2>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
        </div>
    )
}

export default Pessoas