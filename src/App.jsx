import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <Navbar />
        <main>
          <Hero />
          <Tech />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
