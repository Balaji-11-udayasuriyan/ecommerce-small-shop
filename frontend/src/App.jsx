// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import HomePage from './components/HomePage';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

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

            </Routes>

      </AppLayout>

    </Router>
      
    </>
  )
}

export default App
