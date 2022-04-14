import { Route, Routes } from 'react-router-dom';
import './App.css';
import Checkout from './Checkout/Checkout';
import Header from './Home/Header/Header';
import Home from './Home/Home/Home';
import Login from './Login/Login';
import NotFound from './NotFound/NotFound';
import Register from './Register/Register';
import RequiredAuth from './RequiredAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/checkout' element={
          <RequiredAuth>
            <Checkout></Checkout>
          </RequiredAuth>
        }></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
