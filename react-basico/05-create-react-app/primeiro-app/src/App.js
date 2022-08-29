import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button/button";
import Card from "./components/card/card";

function App() {
  return (
    <>
      <Button label='Baixar CV'/>
      <Button />
      <Card>
        <h3>Título Card 1</h3>
        <p>esse é um texto do card</p>
      </Card>
      <Card>
        <h3>Título Card 2</h3>
        <p>esse é um texto do card</p>
      </Card>
      <Card>
        <h3>Título Card 3</h3>
        <p>esse é um texto do card</p>
      </Card>
    </>
  );
}

export default App;
