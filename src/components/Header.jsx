import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../images/logo.webp";

export default function Header() {
  function toggleMenu() {
    document
      .getElementsByClassName("navigation")[0]
      .classList.toggle("responsive");
  }

  return (
    <header className="bg-accent3 shadow-lg mb-8">
      <div className="flex flex-row items-center justify-between m-auto p-5 w-full lg:w-3/4">
        <a href="#home">
          <img src={Logo} alt="logo" width={190} height={59} />
        </a>
        <nav>
          <ul className="navigation flex flex-row">
            <li>
              <a href="#" onClick={toggleMenu}>
                <MenuIcon style={{ color: "#f25c05", fontSize: "35px" }} />
              </a>
            </li>
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
        </nav>
      </div>
    </header>
  );
}
