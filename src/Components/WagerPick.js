import React, { Component } from "react";
// import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';

export default class WagerPick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isWagerSelected: false,
            WagerAmt: null,
        }
    }


    clearWager = () => {
        this.setState({
            isWagerSelected: false,
            WagerAmt:null,
        })
    }

    changeWager5 = () => {
        const match = this.state.timeMatch;
        if (!match) {
            console.log("BET AMT 1")
            this.setState({
                isWagerSelected: true,
                WagerAmt: 5,
            })
        }
        
    }

    changeWager10 = () => {
        const match = this.state.timeMatch;
        if (!match) {
            console.log("BET AMT 2")
            // SEND TO SERVER FOR MATCH MAKING
            this.setState({
                isWagerSelected: true,
                WagerAmt: 10,
            })
        }
        
    }

    changeWager15 = () => {
        const match = this.state.timeMatch;
        if (!match) {
            console.log("BET AMT 3")
            this.setState({
                isWagerSelected: true,
                WagerAmt: 15,
            })
        }
        
    }


render() {
    const isWagerSelected = this.state.isWagerSelected;
    let chosenWager
    if (!isWagerSelected) {
        chosenWager = (
            <div>
                <Button onClick={this.changeWager5}>.25 SOL</Button>
                <br />
                <Button onClick={this.changeWager10}>.5 SOL</Button>
                <br />
                <Button onClick={this.changeWager15}>1 SOL</Button>
            </div>
        )
    } else {
        chosenWager = (
            <div>
            <Button variant="outlined" color="primary" onClick={this.clearWager}>
                CHANGE Wager
            </Button>
            </div>
        )
        
    }
    
  return (
    <div>
        {chosenWager}
    </div>
  );
  }
}
