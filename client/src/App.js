import { Main } from './components/Main';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { DrugPage } from './components/DrugPage';
import ProductList from './components/product/ProductList';
import { About } from './components/About';
import { Contact } from './components/Contact';
import './style/DrugPage.css';
import './App.css';
import './style/main.css';
import './style/pages.css';
import MobileHomepage from './components/MobileHomepage';

function App() {
    return (
        <div>
            <Navbar />

            <Routes>
                <Route path='/' element={<Main />} />
                <Route path='/home' element={<MobileHomepage />} />
                <Route path='/About' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/product' element={<DrugPage />} />
            </Routes>
        </div>
    );
}

export default App;
