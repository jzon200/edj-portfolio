type Props = {
  vidSrc: string;
  vidLink: string;
  projectName: string;
  projectDetails: string;
};

export default function ProjectContainer({
  vidSrc,
  vidLink,
  projectName,
  projectDetails
}: Props) {
  return (
    <a href={vidLink} className="relative">
      <video className="w-full rounded-xl" autoPlay loop muted>
        <source src={vidSrc} />
      </video>
      <div className="w-full absolute bottom-0 py-4 px-8 bg-indigo-500 opacity-75 rounded-b-lg text-white">
        <b>{projectName}</b>
        <p>{projectDetails}</p>
      </div>
    </a>
  );
}
