import{Link} from 'react-router-dom'
import Styles from './navbar.module.css'
function Navbar(){
    return(
        <ul className={Styles.list}>
        <li className={Styles.item}><Link to="/">HOME</Link></li>
        <li className={Styles.item}><Link to="/empresa">EMPRESA</Link></li>
        <li className={Styles.item}><Link to="/contato">CONTATO</Link></li>
    </ul>
    )
}

export default Navbar