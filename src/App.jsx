import ThemeSwitch from './components/ThemeSwitch';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';

/**
 * App is the root component of the application that assembles all the main sections
 * including navigation, theme switching, and various content sections.
 */
function App() {
  return (
    <div className='App'>
      <ThemeSwitch />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
