import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout.jsx';
// Removed the duplicate HeroSection import
import Menu from './Pages/Menu/Menu.jsx';
import About from './Pages/About/About.jsx';
import Reservations from './Pages/Reservations/Reservations.jsx';
import HomePage from './Pages/Home/Home.jsx'; // This is the component we will use for the homepage

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/menu" element={<Layout><Menu /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/reservations" element={<Layout><Reservations /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;