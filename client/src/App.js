
import { Main } from './components/Main';
import Navbar from "./components/Navbar";
import React from 'react';
import {Route,Routes} from 'react-router-dom'
import { DrugPage } from './components/DrugPage';
import { About } from './components/About';
import { Contact } from './components/Contact';
import './style/DrugPage.css'
import './App.css';
import './style/main.css'
import './style/pages.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/About" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/product" element={<DrugPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;