import style from  './Frase.module.css'
import soma from './soma'

function Frase(){
    
    return(
        <div className={style.FraseContainer}>
            <h2 className={style.texto}>FRASE</h2>
            <p className={style.paragrafo}>resultado da soma: { soma(3,5)}</p>
        </div>
    )
}

export default Frase