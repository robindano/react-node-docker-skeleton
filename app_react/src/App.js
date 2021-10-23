import logo from './logo.svg';
import './App.css';

function App() {
  fetch(process.env.REACT_APP_NODE_URL)
    .then(response => response.json())
    .then(data => console.log(data))
  return (
    <div className="App">

    </div>
  );
}

export default App;
