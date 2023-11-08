
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import Layout from './layout/Layout';
import DetailPage from './pages/DetailPage';
import Toegeungil from './components/project/Toegeungil'
function App() {
  const scrollRef = useRef([]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout scrollRef={scrollRef} />}>
          <Route index element={<DetailPage scrollRef={scrollRef} />} />
          <Route path='/toegeungil' element={<Toegeungil />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
