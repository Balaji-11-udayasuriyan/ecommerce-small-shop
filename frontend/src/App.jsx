// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import HomePage from './components/HomePage';

function App() {

  return (
    <>

    <Router>

      <AppLayout>

            <Routes>

                <Route path ="/" element={<HomePage/>} />

            </Routes>

      </AppLayout>

    </Router>
      
    </>
  )
}

export default App
