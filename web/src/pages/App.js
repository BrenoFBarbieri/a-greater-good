import './App.css';
import Header from '../components/header';
import Card from '../components/card';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="content">
          <div className="subtitle">
            O mundo seria um lugar muito melhor se doássemos<br />aquilo que temos em abundância ao nosso<br />próximo necessitado.
          </div>
          <div className="container-card">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
