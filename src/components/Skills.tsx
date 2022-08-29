type Props = {
  logoSrc: string;
  logoAlt: string;
  skillName: string
};


export default function Skills({ logoSrc, logoAlt, skillName }: Props) {
  return (
        <li className="flex items-center gap-4">
          <img src={logoSrc} alt={logoAlt} />
          <div>{skillName}</div>
        </li>
      )

}
