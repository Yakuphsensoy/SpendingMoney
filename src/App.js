import './App.css';
import React, { useContext } from "react";
import Money from "./components/Money";
import { useState } from 'react'
import Card from './components/card';
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
