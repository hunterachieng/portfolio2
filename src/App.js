import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
//components
import Bio from './Bio';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <Router>
    <div className="App">
      
     
       
 <Home />
 <Bio/>
 <Projects/>
 <Contact />
    </div>
    </Router>
    
  );
}

export default App;
