import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/linkedin"
          element={<Navigate to="https://www.linkedin.com/in/achyuthss/" />}
        />
        <Route
          path="/github"
          element={<Navigate to="https://github.com/achyu-dev" />}
        />
        <Route
          path="/resume"
          element={
            <Navigate to="https://drive.google.com/drive/folders/1qH1MgVoN7E_8dztzpcp1PBVBmDnO05Z1?usp=drive_link" />
          }
        />
        <Route
          path="/"
          element={
            <div
              className="overflow-x-hidden text-neutral-300 antialiased 
          selection:bg-cyan-300 selection:text-cyan-900"
            >
              <div className="fixed top-0 -z-10 h-full w-full">
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
              </div>

              <div className="container mx-auto px-8">
                <Navbar />
                <Hero />
                <Tech />
                <Experience />
                <Projects />
                <Contact />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
