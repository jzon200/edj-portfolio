import SkillsList from "./SkillsList";

export default function AboutMe() {
  return (
    <footer className="h-[100vh] min-h-[930px] mt-40 pt-12 relative bg-purple-600 rounded-tl-[100px] text-white font-poppins md:h-[110vh] lg:h-[100vh]">
      <div className="grid justify-items-center lg:grid-cols-[1fr_2fr]">
        <h1 className="text-2xl font-semibold mb-8 md:text-2xl lg:text-3xl">About me</h1>
        <div className="text-base w-[85%] md:text-lg lg:text-xl">
          <p>Hello! I enjoy designing and developing things that exist on the internet. I'm always looking for new opportunities to learn, grow and enhance my skill set, currently learning React and NodeJS</p>
          <br />
          <p>Graduated in Lyceum of The Philippines University (LPU) BS in Information Technology.</p>
          <br />
          <p>Technologies I've been using with recently:</p>

          <SkillsList />
        </div>
      </div>
      <div className="absolute bottom-0 rounded-tr-[72px] bg-[#1f1660] w-[100%] h-[300px] z-20">
        <div className="mt-12 text-center grid grid-cols-1 place-items-center md:grid-cols-2 md:text-left">
          <div>
            <div className="text-xl font-semibold">
              Interested to work with me?
            </div>
            <br />
            <p>I want to work with you to create really cool stuff.</p>
          </div>
          <button className="text-lg border border-blue-500 rounded-lg mt-3 px-4 py-3 font-poppins font-medium xl:text-2xl text-blue-500">
            Get In Touch
          </button>
          <div className="text-center text-gray-400 mt-12">
          ☕ Designed & Developed by Edd Jhae Bausa
        </div>
        </div>
        
      </div>
    </footer>
  );
}
