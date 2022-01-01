import Nav from "./components/UI/Nav";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/UI/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
