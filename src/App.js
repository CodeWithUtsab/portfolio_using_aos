import PulseLoader from "react-spinners/PulseLoader";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Project from "./pages/Project/Project";
import Service from "./pages/Service/Service";

function App() {
  return (
    <>
      <div className="body">
        <div id="loading_start" className="loading_start_none">
          <p>Loading</p>
          <PulseLoader color={"#05e6ee"} size={12} />
        </div>
      </div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Service />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
