import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Matches from './pages/Matches';
import Players from './pages/Players';
import Courts from './pages/Courts';
import AddPlayer  from './pages/AddPlayer';
import EditPlayer  from './pages/EditPlayer';
 


function App() { 
  return (
    
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Matches/>} />
          <Route path='/players' element={<Players/>} />
          <Route path='/courts' element={<Courts/>} />
          <Route path = "/add-player" element ={<AddPlayer />}/>     
         
        </Routes>
      </Router>
       
  );
}

export default App;
