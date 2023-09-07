export default function Home() {
  return (
    <section
      id="home"
      className="home-container flex justify-center items-center scroll-mt-12"
    >
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl text-main underline decoration-2 decoration-accent1 mb-10 text-center font-bold">
          Welcome to my Portfolio!
        </h1>
        <div className="home-info w-11/12 lg:w-3/4 flex flex-col gap-y-8 lg:flex-row lg:gap-x-10 justify-center items-center">
          <img
            src="../images/me.jpg"
            alt="photo of me"
            width={351}
            height={351}
            className="rounded-full"
          />
          <p className="text-lg md:text-xl text-main text-center">
            Hello, my name is Hunter Blake! This is my Portfolio website created
            with React and Tailwind. I am a Front-End Developer with 2 years
            worth of experience in creating fully responsive and optimized
            websites. On here, you will learn a little bit about me, see some
            projects I have worked on, and a form where you can contact me! If
            you have any questions or want to get in touch, don&apos;t hesitate
            to reach out!
          </p>
        </div>
      </div>
    </section>
  );
}
