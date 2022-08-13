import ProjectContainer from "./ProjectContainer";

export default function FeaturedProjects() {
  return (
    <section className="my-16">
      <div className="flex justify-between items-center">
        <h1 className="text-[hsl(247,37%,19%)] text-3xl font-bold">
          Featured Projects
        </h1>
        <p className="text-xl font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum,
          temporibus.
        </p>
      </div>
      <ProjectContainer className="bg-sky-500" />
      <ProjectContainer className="bg-[#E59A7E]" />
      <ProjectContainer className="bg-pink-300" />
    </section>
  );
}
