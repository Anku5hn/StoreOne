import "./App.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";//react-router-dom imports in the app file
import Product from "./pages/Product.jsx"
import Lamborghini from "./pages/Lamborghini.jsx";
import Iphone from "./pages/Iphone.jsx";
import React from 'react'
function App() {
  return (
    <>
      <Router>{/*Router is the first wrap*/}
        <Routes >{/*Routes is the second wrap*/}
        <Route path="/" element = {<Home/>}/>{/*Route is the final wrap with element which is the imported page/component*/}
        <Route path="/product" element = {<Product />}/>
        <Route path="/lambo" element = {<Lamborghini/>}/>
        <Route path="/iphone" element = {<Iphone />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
