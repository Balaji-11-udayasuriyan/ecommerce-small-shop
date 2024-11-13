// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import HomePage from './components/HomePage';
import Login from './components/auth/Login';

function App() {

  return (
    <>

    <Router>

      <AppLayout>

            <Routes>

                <Route path ="/" element={<HomePage/>} />

                <Route path ="/login" element={<Login/>} />

            </Routes>

      </AppLayout>

    </Router>
      
    </>
  )
}

export default App
