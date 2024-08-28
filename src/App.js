


import './App.css';
import Home from '../src/pages/home/Home'
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import About from './pages/about/About';
import Menus from '../src/pages/menu/Menus';
import Signup from '../src/pages/signup/Signup'
import Contact from '../src/pages/contact/Contacts';
function App() {
  return (
    <div className='App'>
         
        <Router>
          
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/menu' element={<Menus/>} />
           
            <Route path='/contact' element={<Contact/>} />
            <Route path='/signup' element={<Signup/>} />
            
            
 
            
          </Routes>
        </Router>
    </div>
  );
}

export default App;
