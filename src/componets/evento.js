import React, { useState } from 'react';
import Button from './eventos/button'
function Evento() {
  const [name, setName] = useState('');
  const [senha, setSenha] = useState('');

  function cadastrar(e) {
    e.preventDefault(); // Corrigido preventDeafaul para preventDefault
    console.log(name);
    console.log(senha);
  }
  function meuEvento(){
    console.log('ativando o evento')
  }
  function segEvento(){
    console.log('ativando o segundo evento')
  }
 
    return(
      <div>
        <h1>Meu formulario</h1>
        <form onSubmit={cadastrar}>
            <div>
              <label htmlFor="name">Name:</label>
              <input 
                 type="text"
                 id="name"
                 placeholder="Digite seu nome"
                 onChange={(e)=> setName(e.target.value)}></input>
            </div>
            <div>
              <label htmlFor="senha">Senha:</label>
              <input type="password" id="senha" placeholder="Digite seu senha" onChange={(e) => setSenha(e.target.value)}></input>
            </div>
            <div>
              <input type="submit" value="cadastrar"></input>
            </div>
        </form>
        {(name , senha) &&(
          <h2>{name} {senha}</h2>
        )}
        <div>
          <p>Clique para disparar o evento</p>
          <Button evento={meuEvento} text=" primeiro button"/>
          <Button evento={segEvento} text=" segundo button"/>

        </div>
      </div>  
    )
}

export default Evento