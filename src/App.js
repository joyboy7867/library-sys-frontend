import './App.css';
import { BrowserRouter as Router, Routes,
  Route, Redirect,} from "react-router-dom";

import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';


function App() {
  return (
    <>
      
    
     
      <Router>
          <Routes>
            <Route exact path='/register' element={<Register/>}/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/about' element={<About/>}/>
          </Routes>
      </Router>
      
      
    
    </>
  );
}

export default App;
