import React, { Component } from 'react';
import './App.css';
import ProductManager from "./components/Products/Containers/ProductsManager";
import CartManager from "./components/Cart/Containers/CartManager/CartManager";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="prdCart">
          <ProductManager />
          <CartManager />
        </div>
      </div>
    );
  }
}

export default App;
