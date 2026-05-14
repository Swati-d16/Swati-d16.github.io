import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./components/Projects";   
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import './index.css';


const App = () => {
  return (
    <main className='bg-slate-300/20'>
      <Router>
        <Navbar />
        <Routes>
          {/* Home page shows all components */}
          <Route path="/" element={<Home />} />

          {/* Individual pages */}
          <Route path='/bio' element={<Bio />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/experience' element={<Experience />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
}

export default App;