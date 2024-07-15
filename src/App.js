import{BrowserRouter as Router, Routes , Route , Link} from 'react-router-dom'
import Home from './componets/pages/home';
import Empresa from './componets/pages/empresa';
import Contato from './componets/pages/contato';
import Navbar from './componets/layout/navbar';
import Footer from './componets/layout/footer';
function App() {
  

    return (
       <Router>
        
        <Navbar/>

        <Routes>

            <Route exact path='/' element={<Home/>}></Route>

            <Route path='/empresa' element={<Empresa/>}></Route>

            <Route path='/contato' element={<Contato/>}></Route>

        </Routes>

        <Footer></Footer>

       </Router>
    )
}

export default App;
