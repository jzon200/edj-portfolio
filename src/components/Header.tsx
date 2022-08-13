export default function Header() {
  return (
    <header className="my-8 bg-white flex justify-between items-center">
      <a href="#">
        <img src="/assets/EJ-logo.svg" alt="logo" className="w-20" />
      </a>
      <nav>
        <ul
          className="mr-8 flex gap-14 font-semibold
         text-blue-500 text-xl uppercase cursor-pointer">
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
          <li>Resume</li>
        </ul>
      </nav>
    </header>
  );
}
