import './App.css';
import React from "react";
import Money from "./components/Money";
import Products from './components/Products';

import { ContextProvider } from "./ContextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="App-header">
        <Money />
      </div>
      <div className="products">
        <Products />
      </div>
    </ContextProvider>
  )
}

export default App;
