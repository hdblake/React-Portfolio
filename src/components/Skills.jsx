import Language from "./skills/Language.jsx";
import Framework from "./skills/Framework.jsx";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-8">
      <h1 className="text-3xl md:text-4xl text-main underline decoration-2 decoration-accent1 mb-4 text-center font-bold">
        Skills
      </h1>
      <div className="mt-6 flex flex-col gap-y-10 md:flex-row md:gap-x-20">
        <Language />
        <Framework />
      </div>
    </section>
  );
}
