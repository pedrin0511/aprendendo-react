import React, { useState } from 'react';

function Form() {
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [resultado , setResultado] = useState(null)

    function cadastrar(e,operacao) {
        e.preventDefault();
    let res
    switch (operacao) {
        case '+':
            res = parseFloat(n1) +  parseFloat(n2)
        break;
        case '-':
             res = parseFloat(n1) -  parseFloat(n2)
        break;
        case '*':
            res = parseFloat(n1) *  parseFloat(n2)
        break;
        case '/':
            if(parseFloat(n2) === 0 ){
                console.log('erro')
                res = 'erro'
            }else{
                res = parseFloat(n1) /  parseFloat(n2)
            }
            
        break;
        default:
            break;
    }
     
       setResultado(res)
    }

    return (
        <div>
            <h1>Meu cadastro</h1>
            <form >
                <div>
                    <input 
                        type="number" 
                        placeholder="Digite seu nome" 
                        value={n1} 
                        onChange={(e) => setN1(e.target.value)} 
                    />
                </div>
                <div>
                    <input 
                        type="number" 
                        placeholder="Digite seu nome" 
                        value={n2} 
                        onChange={(e) => setN2(e.target.value)} 
                    />
                </div>
                <div>
                    <button type="submit" onClick={(e) => cadastrar(e, '+')}>+</button>
                    <button type="submit" onClick={(e) => cadastrar(e, '-')}>-</button>
                    <button type="submit" onClick={(e) => cadastrar(e, '*')}>*</button>
                    <button type="submit" onClick={(e) => cadastrar(e, '/')}>/</button>
                </div>
            </form>
            {resultado !== null &&(
                <div>
                    <h2>RESULTADO: {resultado}</h2>
                </div>
            )}
        </div>
    );
}

const degay = (() => {
    
})
degay()
export default Form