import './App.css';
//components
import Bio from './Bio';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
 <Home />
 <Bio/>
 <Projects/>
 <Contact />
    </div>
  );
}

export default App;
