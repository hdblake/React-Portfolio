import Header from "./Header.jsx";
import Home from "./Home.jsx";
import About from "./About.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-1 gap-y-40 justify-items-center">
        <Home />
        <About />
      </main>
    </>
  );
}
