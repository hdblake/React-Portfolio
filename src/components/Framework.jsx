import { frameworks } from "../data/skills.js";

export default function Framework() {
  return (
    <ul>
      {frameworks &&
        frameworks.map((skill) => <li key={skill.id}>{skill.name}</li>)}
    </ul>
  );
}
