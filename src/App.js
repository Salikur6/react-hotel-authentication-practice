import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout/Checkout';
import Header from './Home/Header/Header';
import Home from './Home/Home/Home';
import Login from './Login/Login';
import Register from './Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/checkout' element={<Checkout></Checkout>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
