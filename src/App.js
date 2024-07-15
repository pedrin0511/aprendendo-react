
import './App.css';
import Outralista from './componets/eventos/outralista';
function App() {

  const meuitens = ['React','Vlur' ,'angular']

  return (
    <div className="App">
      <h1>Renderização de lista</h1>
      <Outralista itens={meuitens} />
      <Outralista itens={[]} />
    </div>
  );
}
export default App;
