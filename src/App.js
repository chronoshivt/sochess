import React, { Component, useState } from "react";
import './App.css'
import MoveValidation from "./integrations/MoveValidation";
import PhantomHandler from "./integrations/PhantomHandler";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
// import PopUp from "./Components/PopUp";
import BPopover from "./Components/BPopover.js"
import TimePick from './Components/TimePick.js'
import WagerPick from './Components/WagerPick.js'

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
            <PhantomHandler />
            <div className="time">
            <TimePick />
            </div>
            <div className="wager">
              <WagerPick />
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
