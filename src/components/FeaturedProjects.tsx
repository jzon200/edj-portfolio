import ProjectContainer from "./ProjectContainer";

export default function FeaturedProjects() {
  return (
    <section className="my-12">
      <div className="flex flex-col justify-between items-center mb-6 lg:flex-row">
        <h1 className="text-[hsl(247,37%,19%)] text-2xl font-bold lg:mb-6 2xl:text-3xl">
          Featured Projects
        </h1>
        <p className="text-lg font-light text-center 2xl:text-xl">
          my work is the bridge to various insightful digital experiences.
        </p>
      </div>

      <div className="grid gap-8 md:gap-5 md:grid-cols-2 lg:gap-10">
        <ProjectContainer vidSrc="../../assets/puzzle-demo.mp4" vidLink="#" projectName="Puzzle Game" projectDetails="React, Typescript, TailwindCSS"/>
        <ProjectContainer vidSrc="../../assets/sample.mp4" vidLink="#" projectName="Puzzle Game" projectDetails="React, Typescript, TailwindCSS"/>
        <ProjectContainer vidSrc="../../assets/sample.mp4" vidLink="#" projectName="Puzzle Game" projectDetails="React, Typescript, TailwindCSS"/>
        <ProjectContainer vidSrc="../../assets/sample.mp4" vidLink="#" projectName="Puzzle Game" projectDetails="React, Typescript, TailwindCSS"/>
      </div>
    </section>
  );
}
