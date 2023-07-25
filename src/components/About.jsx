import Links from "./Links.jsx";

export default function About() {
  return (
    <div className="my-6">
      <h1 className="text-2xl md:text-4xl text-main underline decoration-2 decoration-secondary mb-2 text-center font-bold">
        About Me
      </h1>
      <div className="about-container mt-6 grid grid-cols-1 grid-rows-2 lg:grid-rows-1 lg:grid-cols-3 sm:items-center lg:items-stretch">
        <div className="about col-span-2">
          <p className="text-lg md:text-xl text-main text-center">
            I am in my Senior year at BYU - Idaho (attending online) and I am
            expected to graduate at the end of 2023 with my Bachelor&apos;s in
            Applied Technology. My concentration has been in Web Development,
            with most my concentration being on Front-End Development with some
            Backend Development mixed in. I am passionate about technology, and
            that passion is the main reason for my career switch. I view myself
            as someone who is eager to learn new things and I am constantly
            looking at ways I can improve to further my skills. I am also a huge
            sports fan. Being from the Chicago, IL area I am a die-hard Chicago
            fan and love cheering on the Bears, Cubs, Bulls, and Blackhawks! In
            my free time, I love to spend time with my family, play games, and
            play golf!
          </p>
        </div>
        <div className="links-container flex sm:flex-row justify-around lg:flex-col text-center">
          <Links url={"https://github.com/hdblake"} name={"Github"} />
          <Links
            url={"https://www.linkedin.com/in/hunter-blake/"}
            name={"LinkedIn"}
          />
          <Links url={"#"} name={"Resume"} />
        </div>
      </div>
    </div>
  );
}
