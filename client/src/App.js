import { Main } from './components/Main';
import Navbar from './components/Navbar';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DrugPage } from './components/DrugPage';
import './style/DrugPage.css';
import './App.css';
<<<<<<< HEAD
import './style/main.css';

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/About' />
                <Route path='/contact' />
                <Route path='/product' element={<DrugPage />} />
            </Routes>
        </div>
    );
=======
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
>>>>>>> Ahmad
}

export default App;
