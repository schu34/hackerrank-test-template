import React, { Component } from 'react';
import './App.css';

const Fridge = () => {
  return (
    <div></div>
  )
};

const Grocery = () => <span />;

const ShoppingCart = () => <div />;
class App extends Component {
  render() {
    return (
      <div>
        Add a Grocery <br />
        Add a Fridge <br />
        Add a Shopping Cart  <br />
      </div>
    );
  }
}

export {
  Fridge,
  Grocery,
  ShoppingCart
}

export default App;
