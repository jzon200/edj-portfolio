type Props = {
  className: String;
};

export default function ProjectContainer({ className }: Props) {
  return <div className={`my-12 h-[50vh] rounded-[98px] ${className}`}></div>;
}
