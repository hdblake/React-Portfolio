import Logo from "../images/logo.webp";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-accent3 shadow-lg mb-8 fixed top-0 w-full z-10">
      <div className="flex flex-row items-center justify-between m-auto p-5 w-full lg:w-3/4">
        <a href="#home">
          <img src={Logo} alt="logo" width={190} height={59} />
        </a>
        <nav>
          <div className="flex flex-row items-center gap-x-2">
            <div className="hamburger" onClick={toggleMenu}>
              <div className={`line ${isOpen ? "open" : ""}`}></div>
              <div className={`line ${isOpen ? "open" : ""}`}></div>
              <div className={`line ${isOpen ? "open" : ""}`}></div>
            </div>
            <div className={`menu ${isOpen ? "open" : ""}`}>
              <ul className="navigation flex flex-col md:flex-row gap-x-4">
                <li className="text-main text-xl lg:text-2xl font-bold hover:text-accent1 hover:underline hover:decoration-2 hover:decoration-secondary">
                  <a href="#about">About</a>
                </li>
                <li className="text-main text-xl lg:text-2xl font-bold hover:text-accent1 hover:underline hover:decoration-2 hover:decoration-secondary">
                  <a href="#projects">Projects</a>
                </li>
                <li className="text-main text-xl lg:text-2xl font-bold hover:text-accent1 hover:underline hover:decoration-2 hover:decoration-secondary">
                  <a href="#skills">Skills</a>
                </li>
                <li className="text-main text-xl lg:text-2xl font-bold hover:text-accent1 hover:underline hover:decoration-2 hover:decoration-secondary">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
