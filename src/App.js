import React, { Component } from "react";
import './App.css'
import MoveValidation from "./integrations/MoveValidation";

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
            <div className ="pl">PLAY</div>
            <div>LINK WALLET</div>
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
