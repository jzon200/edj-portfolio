import { Fragment } from "react";
import { AboutMe, FeaturedProjects, Header, Introduction } from "./components";

function App() {
  return (
    <Fragment>
      <div className="w-[75%] mx-auto font-poppins">
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
