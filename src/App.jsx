import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './Home';
import About from './About/About';
import Service from './service/Service';
import Menu from './menu/Menu';
import Contact from './contact/Contact';
import Table from './Home/Table';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/service' element={<Service/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/book_table' element={<Table />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
