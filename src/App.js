import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
//components
import Bio from './Bio';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
    <div className="App">
      
     
       
 <Home />
 <Bio/>
 <Projects/>
 <Contact />
 <ScrollToTop/>
    </div>
    </Router>
    
  );
}

export default App;
