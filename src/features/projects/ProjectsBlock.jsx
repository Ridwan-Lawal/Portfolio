import ProjectCard from "./ProjectCard";

function ProjectsBlock() {
  return (
    <div className="">
      <div className="flex flex-col items-center gap-11 mt-28 md:mt-28 px-12">
        <div className="text-center">
          <h2 className="heading">Projects</h2>
          <p className="text-gray-300 lg:mt-3">Some of my works</p>
        </div>

        <div className="space-y-14">
          <ProjectCard
            imageOrder="md:order-2"
            detailsOrder="md:order-1"
            projectName="Devjobs"
            projectImg="projects/devjobs.PNG"
            preview="https://dev-jobs-orpin.vercel.app/"
            github="https://github.com/Ridwan-Lawal/dev-jobs"
          >
            A platform where developers can browse and apply for job
            opportunities. Implemented features such as job listing, and search
            and filtering functionalities using the React library and the
            Context API for state management.
          </ProjectCard>

          <ProjectCard
            imageOrder="md:order-1"
            detailsOrder="md:order-2"
            projectName="Where in the world"
            projectImg="projects/restcountries.PNG"
            preview="https://rest-countries-tawny-rho.vercel.app/"
            github="https://github.com/Ridwan-Lawal/Rest-Countries"
          >
            A user-friendly app that allows users to see various details about
            countries and interact with the data in meaningful ways. It includes
            features such as regional filter, countries search, and country
            detail view.
          </ProjectCard>

          <ProjectCard
            imageOrder="md:order-2"
            detailsOrder="md:order-1"
            projectName="Quiz App"
            projectImg="projects/quizapp.PNG"
            preview="https://new-quiz-app-beta.vercel.app/"
            github="https://github.com/Ridwan-Lawal/New-Quiz-App"
          >
            A quiz app that offers real-world HTML, CSS, JavaScript and
            accessibility quizzes. It presents multiple-choice questions one at
            a time to the user with a scoring system that calculates and
            displays the user’s score at the end of the quiz
          </ProjectCard>

          <ProjectCard
            imageOrder="md:order-1"
            detailsOrder="md:order-2"
            projectName="Dictionary"
            projectImg="projects/dictionary.PNG"
            preview="https://dictionary-react-ruby.vercel.app/"
            github="https://github.com/Ridwan-Lawal/dictionary-react"
          >
            A user-friendly dictionary app designed to provide fast, accurate
            definitions, synonyms, and translations at your fingertips. Built
            from a project on Frontend Mentor
          </ProjectCard>
        </div>
      </div>
    </div>
  );
}

export default ProjectsBlock;
