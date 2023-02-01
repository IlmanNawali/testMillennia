import logo from './logo.svg';
// import './styles/globals.css'
import './App.css';
// import { default as Header } from './static/header'
import { BarangList, BarangDetail, Login, BarangInput} from './components'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
        <div className='container-fluid fluid-screen body' >
          <div className="row flex-nowrap index"> 
            <Routes>
            <Route path='/barang' element={<BarangList/>} />
            <Route path='/' element={<Login/>} />
            <Route path='/barang_input' element={<BarangInput/>} />
            <Route path='/barang_detail/:id' element={<BarangDetail/>} />
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
