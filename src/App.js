import logo from './logo.svg';
import './App.css';

import Intervalo from './Components/Intervalo';
import Card from './Components/Card';

function App() {
  return (
    <div className="App">
      <h1>Ex React Redux</h1>
      <div className='linha'>
        <Intervalo></Intervalo>
      </div>
      <div className='linha'>
      <Card title='Card2' green>X</Card>
        <Card title='Card3' blue>Y</Card>
        <Card title='Card4' purple>Y</Card>
      </div>
    </div>
  );
}

export default App;
