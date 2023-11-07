import Layout from "./layout/Layout";
import DetailPage from "./pages/DetailPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={< Layout />} >
            <Route index element={<DetailPage />}></Route>
          </Route>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
