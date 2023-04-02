import About from "./About";
import Bot from "./Bot";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import Hireme from "./Hireme";
import Project from "./Project";
import Skills from "./Skills";
import Navbar from "./Navbar";





function App(){
  return(
    <div >
    <Navbar/>
    <Hero />
    <About />
    <Skills/>
    <Hireme/>
    <Project />
    <Contact/>
    <Footer />
      
    </div>
  )
}

export default App;