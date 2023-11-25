import './App.css';
import Pessoa from './components/Pessoa';
function App() {
  return (
    <div className="App">
      <h1>Olá Mundo</h1>
      <Pessoa
        nome="Celso Coutinho"
        idade="25 anos"
        profissao="Eng Informática"
      />
    </div>
  );
}

export default App;
