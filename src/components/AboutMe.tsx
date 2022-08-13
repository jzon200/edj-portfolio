import SkillsList from "./SkillsList";

export default function AboutMe() {
  return (
    <footer className="h-[120vh] mt-60 pt-32 relative bg-purple-600 rounded-tl-[100px] text-white font-poppins">
      <div className="grid justify-items-center grid-cols-[1fr_2fr]">
        <h1 className="text-4xl font-semibold">About me</h1>
        <div className="text-2xl">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit architecto tempore ducimus repudiandae deleniti
            nostrum reiciendis impedit laborum illum laboriosam.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi hic
            veritatis maxime optio, quam dolorem.
          </p>
          <br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <SkillsList />
        </div>
      </div>
      <div className="absolute bottom-0 rounded-tr-[72px] bg-[#1f1660] w-[95%] h-[40%] z-20">
        <div className="grid grid-cols-2 place-items-center h-full">
          <div>
            <div className="text-3xl font-semibold">
              Interested to work with me?
            </div>
            <br />
            <p>I want to work with you to create really cool stuff.</p>
          </div>
          <button className="py-4 px-8 text-sky-400 border border-sky-400 rounded-lg text-2xl">
            Get In Touch
          </button>
        </div>
        <div className="absolute bottom-4 left-60 text-gray-400">
          ☕ Designed & Developed by Edd Jhae Bausa
        </div>
      </div>
    </footer>
  );
}
