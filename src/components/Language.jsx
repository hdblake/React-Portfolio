import { languages } from "../data/skills.js";

export default function Language() {
  return (
    <div className="bg-accent2 border border-2 border-main rounded-xl p-4 shadow-lg">
      <h2 className="text-2xl text-center font-bold text-accent1 underline decoration-2 decoration-secondary">
        Programming Languages
      </h2>
      <ul>
        {languages &&
          languages.map((skill) => (
            <li
              key={skill.id}
              className="text-2xl text-left text-accent1 my-2 flex flex-row items-center justify-evenly"
            >
              {skill.name} <img src={skill.icon} />
            </li>
          ))}
      </ul>
    </div>
  );
}
