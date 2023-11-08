
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import Layout from './layout/Layout';
import DetailPage from './pages/DetailPage';
function App() {
  const scrollRef = useRef([]);


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout scrollRef={scrollRef} />}>
          <Route index element={<DetailPage scrollRef={scrollRef} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
