
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRef, useState } from "react";
import Layout from './layout/Layout';
import DetailPage from './pages/DetailPage';
import Toegeungil from './components/project/Toegeungil'
import Algore from './components/project/Algore';
function App() {
  const scrollRef = useRef([]);
  const [isToggle, setIsToggle] = useState(false);

  const outsideToggle = () => {
    setIsToggle(false)
  }

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Layout scrollRef={scrollRef} isToggle={isToggle} setIsToggle={setIsToggle} outsideToggle={outsideToggle} />}>
          <Route index element={<DetailPage scrollRef={scrollRef} />} />
          <Route path='/toegeungil' element={<Toegeungil />} />
          <Route path='/Algore' element={<Algore />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
