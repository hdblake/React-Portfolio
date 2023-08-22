import { languages } from "../data/skills.js";

export default function Language() {
  return (
    <ul>
      {languages &&
        languages.map((skill) => <li key={skill.id}>{skill.name}</li>)}
    </ul>
  );
}
