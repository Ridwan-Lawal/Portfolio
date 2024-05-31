/* eslint-disable react/prop-types */
function ProjectLink({ children, link, linkText }) {
  return (
    <button className="flex gap-2.5 items-center ">
      {children}
      <span className="text-white cursor-pointer text-[15px] underline hover:scale-95 transition-transform duration-300">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      </span>
    </button>
  );
}

export default ProjectLink;
