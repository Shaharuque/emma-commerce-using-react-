
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { Routes, Route } from "react-router-dom";
import Orders from './components/Orders/Orders';
import Inventory from './components/Inventory/Inventory';
import About from './components/About/About';
import NoPageFound from './components/No Page Found/NoPageFound';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import RequireAuth from './components/RequireAuth/RequireAuth';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop></Shop>}></Route>
        <Route path='/shop' element={<Shop></Shop>}></Route>
        <Route path='/orders' element={<Orders></Orders>}></Route>
        <Route path='/inventory' element={
          <RequireAuth>
            <Inventory></Inventory>
          </RequireAuth>
        }>
        
        </Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='*' element={<NoPageFound></NoPageFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
