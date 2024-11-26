// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import HomePage from './components/HomePage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgetPassword from './components/auth/ForgetPassword';
import ResetPassword from './components/auth/ResetPassword';
import About from './components/AboutPage';
import Contact from './components/Contact';

function App() {

  return (
    <>

    <Router>

      <AppLayout>

            <Routes>

                {/* home route */}

                <Route path ="/" element={<HomePage/>} />

                {/* auth route */}

                <Route path ="/login" element={<Login/>} />

                <Route path ="/register" element={<Register/>}/>

                <Route path="/forgetpassword" element={<ForgetPassword/>} />

                <Route path="/resetpassword" element = {<ResetPassword/>} />

                <Route path='/about' element= {<About/>} />

                {/* contact route */}

                <Route path = "/contact" element = {<Contact/>} />

            </Routes>

      </AppLayout>

    </Router>
      
    </>
  )
}

export default App
