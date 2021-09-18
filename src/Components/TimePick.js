import React, { Component } from "react";
// import Popover from '@material-ui/core/Popover';
import Button from '@material-ui/core/Button';

export default class TimePick extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTimeSelected: false,
            timeMatch: null,
        }
    }


    clearTime = () => {
        this.setState({
            isTimeSelected: false,
            timeMatch:null,
        })
    }

    changeTime5 = () => {
        const match = this.state.timeMatch;
        if (!match) {
            console.log("5 MINUTES")
            this.setState({
                isTimeSelected: true,
                timeMatch: 5,
            })
        }
        
    }

    changeTime10 = () => {
        const match = this.state.timeMatch;
        if (!match) {
            console.log("10 MINUTES")
            // SEND TO SERVER FOR MATCH MAKING
            this.setState({
                isTimeSelected: true,
                timeMatch: 10,
            })
        }
        
    }

    changeTime15 = () => {
        const match = this.state.timeMatch;
        if (!match) {
            console.log("15 MINUTES")
            this.setState({
                isTimeSelected: true,
                timeMatch: 15,
            })
        }
        
    }


render() {
    const isTimeSelected = this.state.isTimeSelected;
    let chosenTime
    if (!isTimeSelected) {
        chosenTime = (
            <div>
                <Button onClick={this.changeTime5}>5 MINS</Button>
                <br />
                <Button onClick={this.changeTime10}>10 MINS</Button>
                <br />
                <Button onClick={this.changeTime15}>15 MINS</Button>
            </div>
        )
    } else {
        chosenTime = (
            <div>
            <Button variant="outlined" color="primary" onClick={this.clearTime}>
                CHANGE TIME
            </Button>
            </div>
        )
        
    }
    
  return (
    <div>
        {chosenTime}
    </div>
  );
  }
}
