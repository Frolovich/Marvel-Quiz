import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Footer from './Footer';
import ForgetPassword from './ForgetPassword';
import Header from './Header';
import { IconContext } from 'react-icons';
import Landing from './Landing';
import Login from './Login';
import Signup from './Signup';
import { ToastContainer } from 'react-toastify';
import Welcome from './Welcome';
import '../App.css';



function App() {
  return (
    <Router>
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Header />
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/welcome' element={<Welcome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/forgetpassword' element={<ForgetPassword />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </IconContext.Provider>
    </Router>
  );
}

export default App;
