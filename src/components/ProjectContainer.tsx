type Props = {
  className: String;
};

export default function ProjectContainer({ className }: Props) {
  return <div className={`my-12 h-[50vh] min-h-[600px] rounded-[98px] md:min-h-[400px] ${className}`}></div>;
}
