export default function Header() {
  return (
    <header className="sticky top-0 bg-accent3 border-b-2 border-accent1 mb-8">
      <div className="flex flex-row items-center justify-between m-auto p-5 w-full lg:w-3/4">
        <img src="../images/logo.webp" alt="logo" width={190} height={59} />
        <nav>
          <ul className="flex flex-row">
            <li className="mr-5 text-main text-xl lg:text-2xl font-bold hover:text-accent1 hover:underline hover:decoration-2 hover:decoration-secondary">
              <a href="#home">Home</a>
            </li>
            <li className="mr-5 text-main text-xl lg:text-2xl font-bold hover:text-accent1 hover:underline hover:decoration-2 hover:decoration-secondary">
              <a href="#about">About</a>
            </li>
            <li className="text-main text-xl lg:text-2xl font-bold hover:text-accent1 hover:underline hover:decoration-2 hover:decoration-secondary">
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
