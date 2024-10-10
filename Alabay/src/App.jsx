import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Gamepreview1 from './components/gamepreview1/Gamepreview1.jsx';
import Gamepreview2 from './components/gamePreview2/GamePreview2.jsx';
import './App.css'
import StartPage from './components/StartPage.jsx'
function App() {
  return (
    <Router>  {/* Wrap your app in Router */}
      <Routes>  {/* Define routes here */}
        <Route path="/" element={<StartPage />} /> 
         {/* The root route */}
        <Route path="/gamepreview1" element={<Gamepreview1/>} /> 
         {/* Another route */}
        <Route path="/gamepreview2" element={<Gamepreview2/>} />  {/* Another route */}
      </Routes>
    </Router>
  )
}

export default App
