import ProjectContainer from "./ProjectContainer";

export default function FeaturedProjects() {
	return (
		<section className="my-16">
			<div className="flex flex-col justify-between items-center lg:flex-row">
				<h1 className="text-[hsl(247,37%,19%)] text-2xl font-bold 2xl:text-3xl">
					Featured Projects
				</h1>
				<p className="text-lg font-light text-center 2xl:text-xl">
					my work is the bridge to various insightful digital experiences.
				</p>
			</div>
			<ProjectContainer className="bg-sky-500" />
			<ProjectContainer className="bg-[#E59A7E]" />
			<ProjectContainer className="bg-pink-300" />
		</section>
	);
}
