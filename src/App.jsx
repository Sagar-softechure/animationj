import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Nav from './components/Nav';
import Axios_page from './pages/Axios_page';
import Childtoparent from './pages/Childtoparent';
import Tailwind from './pages/Tailwind';
import Hooks from './pages/Hooks';
const App = () => {
  return(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Nav/>}>
      <Route path='/' element={<Home/>} />
      <Route path='/axios' element={<Axios_page/>} />
      <Route path='/gemini' element={<Home/>} />
      <Route path='/Child_parent' element={<Childtoparent/>} />
      <Route path='/Tailwind' element={<Tailwind/>} />
      <Route path='/Hooks' element={<Hooks/>} />
    </Route>
  </Routes>
</BrowserRouter>
 );
};

export default App
