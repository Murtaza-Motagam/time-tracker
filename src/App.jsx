import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Timer from "./pages/Timer.jsx";
import Tasks from "./pages/Tasks.jsx";
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Timer />}/>
          <Route path="/timer" element={<Timer />}/>
          <Route path="/tasks" element={<Tasks />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App