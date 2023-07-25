import About from "./About.jsx";

export default function Home() {
  return (
    <div className="main-container m-2 p-2">
      <div className="intro-container flex flex-col w-2/5 items-center p-2 border-2 border-main rounded-xl">
        <h1 className="text-2xl md:text-4xl text-main underline decoration-2 decoration-secondary mb-2">
          Welcome to my Portfolio!
        </h1>
        <p className="text-lg md:text-xl text-main">
          Hello, my name is Hunter Blake! This is my Portfolio website created
          with React and Tailwind. I am a Front-End Developer with 2 years worth
          of experience in creating full responsive and optimized websites. On
          here, you will learn a little bit about me, see some projects I have
          worked on, and a form where you can contact me! If you have any
          questions or want to get in touch, don&apos;t hesitate to reach out!
        </p>
      </div>
      <section>
        <About />
      </section>
    </div>
  );
}
