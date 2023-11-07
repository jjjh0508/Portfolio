import MainPage from './pages/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div className="App">

      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={< Layout />} >
            <Route index element={<DetailPage />}></Route>
          </Route>
        </Routes>

      </BrowserRouter> */}
      <MainPage />
    </div>
  );
}

export default App;
