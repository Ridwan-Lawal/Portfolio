import ProjectsBlock from "../features/projects/ProjectsBlock";
import About from "../ui/About";
import Header from "../ui/Header";
import TechStack from "../ui/TechStack";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <TechStack />
      <ProjectsBlock />
    </div>
  );
}

export default Home;
