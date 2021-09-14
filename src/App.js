import logo from './logo.svg';
import './App.css';
import Chessboard from 'chessboardjsx';
// import MoveValid from "./Integrations/MoveValid";

function App() {



  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Chessboard position="start"/>
        </div>
      </header>
    </div>
  );
}

export default App;
