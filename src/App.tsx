import { Fragment } from "react";
import { AboutMe, FeaturedProjects, Header, Introduction } from "./components";

function App() {
  return (
    <Fragment>
      <div className="w-[85vw] mx-auto font-poppins md:w-[75vw]">
        <Header />
        <main>
          <Introduction />
          <FeaturedProjects />
        </main>
      </div>
      <AboutMe />
    </Fragment>
  );
}

export default App;
