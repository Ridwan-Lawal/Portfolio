/* eslint-disable react/prop-types */
import { IoLink } from "react-icons/io5";
import Image from "../../ui/Image";
import ProjectLink from "./ProjectLink";
import { FaGithub } from "react-icons/fa";

function ProjectCard({
  children,
  imageOrder = "md:order-2",
  detailsOrder = "md:order-1",
  projectImg,
  preview,
  github,
  stack = "React, Tailwind, React-router",
  projectName,
}) {
  return (
    <div className="shadow-lg shadow-[#020202]  md:shadow-none font-kumbh bg-[rgb(1,6,10)] space-y-8 pb-11 max-w-lg md:max-w-6xl rounded-xl lg:bg-transparent lg:grid lg:grid-cols-2  md:justify-items-between md:items-center gap-12">
      <section className={`${imageOrder}`}>
        <Image
          imgPath={projectImg}
          rounded="rounded-t-2xl lg:rounded-xl"
          position="lg:relative lg:lg:-top-7  lg:left-6 "
          border="lg:border-8"
        />
      </section>
      <section className={`px-6 ${detailsOrder}`}>
        <h1 className="text-white text-[19px] font-merriweather lg:text-[27px] lg:font-semibold">
          {projectName}
        </h1>
        <p className="paragraph mt-4">{children}</p>

        <p className="paragraph mt-4">
          <span className="text-white font-semibold">Stack</span>: {stack}
        </p>

        <section className="mt-9 flex items-center justify-between lg:justify-start lg:gap-8">
          <ProjectLink linkText="Live Preview" link={preview}>
            <IoLink className="text-white -rotate-45" />
          </ProjectLink>

          <ProjectLink linkText="View Code" link={github}>
            <FaGithub className="text-white" />
          </ProjectLink>
        </section>
      </section>
    </div>
  );
}

export default ProjectCard;
