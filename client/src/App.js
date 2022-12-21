import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import ProductList from './components/product/ProductList';


function App() {
  return (
    <div>
      <Navbar />
      <ProductList />

      <div className="container">
        <article>
          <h1>What is Lorem Ipsum? </h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry...
        </article>
      </div>
    </div>
  );
}

export default App;
