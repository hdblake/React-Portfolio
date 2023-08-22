import Header from "./Header.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-1 gap-y-40 justify-items-center">
        <Home />
        <About />
        <Projects />
        <Skills />
      </main>
    </>
  );
}
