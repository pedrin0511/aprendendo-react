import {useState} from 'react'

function Condiçao(){
    const [email, setEmail] = useState()
    const [useremail, setUserEmail] = useState()
    let emailcerto = 'pedro'
    
    function enviaremail(e){
        e.preventDefault()
        if(emailcerto === setEmail){
            setUserEmail(email)
        }else{
            alert('errado')
        }
    }
    function limpar(){
       setUserEmail('')
       
    }

    return(
        <div>
            <h2>Cadastre seu e-mail</h2>
            <form>
                <input type='email' placeholder='digite seu e-mail'onChange={(e) => setEmail(e.target.value)}/>
                <button type='submit' onClick={enviaremail}>enviar e-mail</button>
            </form>
            {useremail && (
                <div>
                    <p>O email é : {useremail}</p>
                    <button onClick={limpar}>limpar</button>
                </div>
            )}
        </div>
    )
}

export default Condiçao