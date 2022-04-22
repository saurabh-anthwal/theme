import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Input from "./Input";
import Product from "./Product";
function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path="/" element={<Input/>}/>
    <Route path="/product" element={<Product/>}/>
    
    
    </Routes>
   
    </div>
    </BrowserRouter>
  );
}

export default App;
