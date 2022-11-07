import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';

function App() {
  return (
    <div className="App">
      <h1>Ex React Redux</h1>
      <div className='linha'>
        <Card></Card>
      </div>
      <div className='linha'>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
