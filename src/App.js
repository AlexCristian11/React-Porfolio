import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Main from './components/Main';
import Contact from './components/Contact';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {

  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    setToggle(prevState => !prevState);
  }

  return (
    <Router>
      <Navbar darkMode={toggle} toggleDarkMode={handleToggle}/>
      <Routes>
        <Route  path="/contact" component={Contact} />
      </Routes>
      <Main darkMode={toggle}/>
    </Router>
  );
}

export default App;
