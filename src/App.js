import React from 'react';
import './App.css';
import Navbar from './components/pages/Navbar';
import ProdsNServsPg from './components/pages/HomePage/ProdsNServsPg.js';
import Footer from './components/pages/Footer/Footer.js'
import Services from './components/pages/Services/Services.js'
import Products from './components/pages/Products/Products.js'
import { BrowserRouter as Router, Routes, Route } from  'react-router-dom';

function App() {
  return(

    <Router>
      <Navbar/>
       <Routes>
       <Route path='/' element={<ProdsNServsPg />} exact />
       <Route path='/services' element={<Services />} />
       <Route path='/products' element={<Products />} />
       </Routes>
       <Footer />
    </Router>
    
   
   
  );
}

export default App;
