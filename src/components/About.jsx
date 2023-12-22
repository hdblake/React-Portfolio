import Links from "./Links.jsx";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import Resume from "../images/My-Resume.pdf";

export default function About() {
  return (
    <section id="about" className="about-container scroll-mt-36">
      <h1 className="text-3xl md:text-4xl text-main underline decoration-2 decoration-accent1 mb-4 text-center font-bold">
        About Me
      </h1>
      <div className="mt-6 w-11/12 lg:w-3/5 m-auto flex flex-col justify-center">
        <p className="text-lg md:text-xl text-main text-center">
          I am a recent graduate from BYU - Idaho with my Bachelor&apos;s in
          Applied Technology with a 3.94 GPA. My concentration has been in Web
          Development, with most my concentration being on Front-End Development
          with some Backend Development mixed in. Through school, I have 2.5
          years of front-end experience and 1 year of backend experience. I am
          passionate about technology, and that passion is the main reason for
          my career switch. I view myself as someone who is eager to learn new
          things and I am constantly looking at ways I can improve to further my
          skills. I am also a huge sports fan. Being from the Chicago, IL area I
          am a die-hard Chicago fan and love cheering on the Bears, Cubs, Bulls,
          and Blackhawks! In my free time, I love to spend time with my family,
          play games, and play golf!
        </p>
        <div className="mt-10 flex flex-col gap-y-10 justify-center md:flex-row md:flex-wrap md:gap-x-20">
          <Links
            url={"http://github.com/hdblake"}
            name={"GitHub"}
            icon={<GitHubIcon />}
          />
          <Links
            url={"https://www.linkedin.com/in/hunter-blake"}
            name={"LinkedIn"}
            icon={<LinkedInIcon />}
          />
          <Links url={Resume} name={"Resume"} icon={<FilePresentIcon />} />
        </div>
      </div>
    </section>
  );
}
