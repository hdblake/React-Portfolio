import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-8">
      <h1 className="text-3xl md:text-4xl text-main underline decoration-2 decoration-accent1 mb-4 text-center font-bold">
        Projects
      </h1>
      <div className="mt-6 flex flex-wrap justify-center">
        {projects &&
          projects.map((project) => (
            <div
              key={project.id}
              className="flex m-4 relative shadow-xl rounded-2xl transition duration-300 ease-in hover:-translate-y-1 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                width={550}
                height={343}
                className="relative object-cover object-center border border-2 border-accent1 rounded-2xl"
              />
              <div className="project-details absolute w-full h-full opacity-0 hover:opacity-95 bg-accent2 border border-2 border-main flex flex-col justify-center items-center gap-y-6 rounded-2xl">
                <h1 className="text-accent1 text-lg font-bold underline decoration-main decoration-2">
                  Name: {project.title}
                </h1>
                <h2 className="text-main text-md font-bold">
                  Created with: {project.created}
                </h2>
                <a href={project.repo} target="_blank" rel="noreferrer">
                  <button className="bg-gradient-to-r from-accent1 to-main transition duration-200 rounded-xl text-accent3 p-2 text-md font-bold flex flex-row justify-evenly items-center w-40 ease-in hover:-translate-y-1 hover:scale-110">
                    GitHub Repo
                  </button>
                </a>
                <a href={project.link} target="_blank" rel="noreferrer">
                  <button className="bg-gradient-to-r from-accent1 to-main transition duration-200 rounded-xl text-accent3 p-2 text-md font-bold flex flex-row justify-evenly items-center w-40 ease-in hover:-translate-y-1 hover:scale-110">
                    Link
                  </button>
                </a>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}
