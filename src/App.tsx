import React, { useState, useEffect } from 'react';
import "./scss/style.scss"
import { Header } from './components/header/Header'
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Fotter'
import { Modal } from './components/modal/ModalLogin';
import { Router, Route, Routes } from "react-router-dom";
import MainPage from './pages/Main';
import { Admin } from './pages/Admin';
function App() {


  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/admin' element={<Admin />} />
    </Routes>
  );
}

export default App;
