import React, { Component } from "react";
import Button from '@material-ui/core/Button';

import {
    Connection,
    clusterApiUrl,
} from "@solana/web3.js";

export default class PhantomHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isConnected: false,
            provider: null,
        }
    }

    getProvider = () => {
        if ("solana" in window) {
            const provider = window.solana;
            if (provider.isPhantom) {
                return provider;
            }
        }
        window.open("https://phantom.app/", "_blank");
    }

    connect = () => {
        const provider = this.state.provider || this.getProvider();
        if (!provider) {
            return;
        }
        provider.connect();
        provider.on("connect", () => {
            this.setState({
                isConnected: true,
                provider: provider
            })
        });
    }

    disconnect = () => {
        const provider = this.state.provider;
        provider.disconnect();
        provider.on("disconnect", () => {
            this.setState({
                isConnected: false,
            })
        });
    }

    signMessage = (message) => {
        const provider = this.state.provider;
        const data = new TextEncoder().encode(message);
        provider.signMessage(data);
    }

    render() {
        const isConnected = this.state.isConnected;
        let connectButton;
        let signButton;
        if (!isConnected) {
            connectButton = (
                <Button variant="outlined" color="primary" onClick={this.connect}>
                    CONNECT WALLET (Phantom)
                </Button>
            )
            signButton = null
        } else {
            connectButton = (
                <Button variant="outlined" color="primary" onClick={this.disconnect}>
                    DISCONNECT WALLET (Phantom)
                </Button>
            )
            const msg = "i'm a message";
            signButton = (
                <Button variant="outlined" color="primary" onClick={() => this.signMessage(msg)}>
                    Sign message
                </Button>
            );
        }
        return (
            <div className="link">
                {connectButton}
                {signButton}
            </div>
        )
    }

}