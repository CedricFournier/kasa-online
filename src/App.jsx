import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Logement from './pages/Logement';
import Propos from './pages/Propos';
import Header from './compoments/Header';
import Footer from './compoments/Footer';
import Error from './pages/Error';

function App(){
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Logement/:id" element={<Logement />} />
                <Route path="/Propos" element={<Propos />} />
                <Route path="/Error" element={<Error />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </Router>
      );
}
  
export default App;