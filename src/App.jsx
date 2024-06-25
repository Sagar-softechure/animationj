import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Axios_page from './pages/Axios_page';
const App = () => {
  return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Nav/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/axios' element={<Axios_page/>} />
      <Route path='/gemini' element={<Home/>} />
    </Route>
  </Routes>
</BrowserRouter>
 );
};

export default App
