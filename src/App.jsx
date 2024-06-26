import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Accounts from './Pages/Accounts';
import Navbar from './Components/Navbar';
import SideNav from './Components/SideNav.jsx';
import { Box, Grid } from '@mui/material';
import SignInSide from './Components/SignUp/signIn';
import SignUp from './Components/SignUp/signup';
import ForgetPassword from './Components/SignUp/forgetPassword';
import InventoryList from './Components/Inventory/InventoryList';
import CollectivesList from './Components/Collectives/CollectivesList'
import Cart from './Components/Cart/Cart.jsx'
import CustomerService from './Components/CustomerService/CustomerService.jsx';
function App() {
  return (
    <>
      <BrowserRouter>
      {false?
      <Routes>
       <Route path='/' exact element={<SignInSide />} />
      <Route path='/signin' exact element={<SignInSide />} />
      <Route path='/signup' exact element={<SignUp />} />
      <Route path='/forgetPassword' exact element={<ForgetPassword />} />
      </Routes>
:
      <div className='bgColor'>
            <Navbar />
            <Box height={70} />
            <Box sx={{display:'flex'}}>
                <SideNav />
                <Routes>
                  <Route path='/' exact element={<Home />} />
                  <Route path='/home' exact element={<Home />} />
                  <Route path='/about' exact element={<About />} />
                  <Route path='/accounts' exact element={<Accounts />} />
                  <Route path='/inventory' exact element={<InventoryList />} />
                  <Route path='/collectives' exact element={<CollectivesList />} />
                  <Route path='/cart' exact element={<Cart />} />
                  <Route path='/customerService' exact element={<CustomerService   />} />

                </Routes> 
            </Box>
        </div>

      }    
      </BrowserRouter>
    </>
  );
}

export default App;
