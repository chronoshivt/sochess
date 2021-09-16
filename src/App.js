import React, { Component } from "react";
import './App.css'
import MoveValidation from "./integrations/MoveValidation";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';



class App extends Component {
  render() {
    return (
      <div>
        <h1 className="top">SolChess </h1>
        <div style={boardsContainer}>
          <MoveValidation />
        </div>
        <div className="uicontainer">
          <div className="ui">
            <div className ="play">
            <Button variant="outlined" color="primary" onClick="">
                PLAY
              </Button>
            </div>
            <div className="link">LINK WALLET</div>
            <div className="time">
              <Button variant="outlined" color="secondary" onClick="">
                TIME
              </Button>
            </div>
            <div className="wager">
            <Button variant="outlined" color="primary" onClick="">
                WAGER
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

const boardsContainer = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
  width: "100vw",
  marginTop: 30,
  marginBottom: 50
};
