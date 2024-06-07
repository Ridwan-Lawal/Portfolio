import ContactBlock from "../features/contact/ContactBlock";
import ProjectsBlock from "../features/projects/ProjectsBlock";
import About from "../ui/About";
import Header from "../ui/Header";
import TechStack from "../ui/TechStack";

function Home() {
  return (
    <div className="max-w-[1200px] mx-auto px-8 ">
      <div>
        <Header />
        <About />
        <TechStack />
        <ProjectsBlock />
        <ContactBlock />
      </div>
    </div>
  );
}

export default Home;
