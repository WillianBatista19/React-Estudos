import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
  const nome='Bia'

  return (
    <div className="App">
      <SayMyName nome="Willian"/>
      <SayMyName nome="Rodrigo"/>
      <SayMyName  nome={nome} />
      <Pessoa 
       nome="Rodrigo"
       idade="28"
       profissao="Programador"
       foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
