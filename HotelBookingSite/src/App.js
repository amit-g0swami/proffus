import React, { useState } from 'react'
import Home from './components/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import SearchPage from "./components/SearchPage";
import Profile from './components/Profile';
import Bookings from './components/Bookings';

function App() {
  const [book, setBook] = useState();
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home setBook={setBook} />} />
          <Route path="/search" element={<SearchPage book={book} />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/my-bookings" element={<Bookings />} />
        </Routes>
      </Router>
    </>
  )
}

export default App