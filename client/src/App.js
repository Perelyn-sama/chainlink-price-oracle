import React, { Component } from "react";
import GetPrice from "./contracts/GetPrice.json";
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = { price: null, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = GetPrice.networks[networkId];
      const instance = new web3.eth.Contract(
        GetPrice.abi,
        deployedNetwork && deployedNetwork.address
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance });
      // this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { contract } = this.state;

    // To get the price from the contract
    const response = await contract.methods.getThePrice().call();

    // Update state with the result.
    this.setState({ price: response / 10 ** 8 });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <button onClick={this.runExample}>Get Eth Price</button>
        <div>Current eth price is {this.state.price}</div>
      </div>
    );
  }
}

export default App;
