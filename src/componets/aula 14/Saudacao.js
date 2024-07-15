function Saudacao({validarnome}){
    function gerarSaudacao(algumnome){
        return `Ola ${algumnome}, tudo bem?`
    }
    return <>
    {validarnome.length > 0 ? 
    (<p>{gerarSaudacao(validarnome)}</p>) : (<p>vazio</p>)}
    </>
}

export default Saudacao 