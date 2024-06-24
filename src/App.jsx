import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
const App = () => {
 return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Nav/>}>
      <Route path='/' element={<Home/>} />
    </Route>
  </Routes>
</BrowserRouter>
 );
};

export default App
