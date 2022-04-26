import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import Register from "./pages/Register";
import Login from "./pages/Login";
import AuthProvider from './context/auth';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';

function App() {
  
  return (
  <>  
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route exact path="/register" element ={<Register/>}/>
        <Route exact path="/login" element ={<Login/>}/>
        <Route element={<PrivateRoute/>}>
          <Route exact path='/' element={<Home/>}/> 
          <Route exact path='/profile' element={<Profile/>}/> 
        </Route> 
      </Routes>
    </AuthProvider>
      </>

  );
}

export default App;

