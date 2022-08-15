const skills = [
  "React",
  "TailwindCSS",
  "Typescript",
  "Firebase",
  "MongoDB",
  "NextJS",
];

export default function SkillsList() {
  return (
    <ul className="pt-12 grid grid-cols-2 gap-4 lg:p-16">
      {skills.map((skill) => (
        <li className="flex items-center gap-4">
          <div className="w-6 h-6 rounded-[50%] border-2 border-yellow-400" />
          <div>{skill}</div>
        </li>
      ))}
    </ul>
  );
}
