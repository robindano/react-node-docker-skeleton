import logo from './logo.svg';
import './App.css';

function App() {
  fetch('http://10.0.0.100:3000')
    .then(response => response.json())
    .then(data => console.log(data))
  return (
    <div className="App">

    </div>
  );
}

export default App;
