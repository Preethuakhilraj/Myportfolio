
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Home'
import Projects from './Projects';
import Navbar from './Navbar';
import Contactme from './Contactme';
import About from './About';

function App() {


  return (
    <Router> 
    <Navbar />
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/home' element={<Home/>}></Route>
     <Route path='/about' element={<About/>}></Route>     
     <Route path='/projects' element={<Projects/>}></Route>
     <Route path='/contact' element={<Contactme/>}></Route>
    </Routes>
       </Router>
  )
}

export default App
