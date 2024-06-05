import Button from "./Button";
import Image from "./Image";

function About() {
  return (
    <div className="mt-28">
      <h2 className="heading text-center mb-10 md:hidden">About me</h2>
      <div
        id="about"
        className=" grid grid-cols-1 md:grid-cols-2  max-w-[1150px] gap-6 mx-auto items-center justify-items-center  md:px-6"
      >
        <div className="w-[60%]  sm:w-[40%] md:w-[60%]   flex items-center shadow-2xl shadow-gray-950 ">
          <Image />
        </div>
        <div className=" justify-self-start text-center w-fit  md:text-left  max-w-[600px] mx-auto">
          <h2 className="heading hidden md:block  ">About me</h2>
          <p className="paragraph mb-10 mt-4">
            I am a dedicated Front-End Developer specialized in creating
            responsive and accessible web interfaces. With a strong foundation
            in HTML, CSS, JavaScript, and React, I excel in turning complex
            designs into functional user experiences. I am committed to
            continuous professional development and collaboration to deliver
            high-quality solutions.
          </p>
          <a
            href="/public/assets/CV-Ridwan.pdf"
            download="CV-Ridwan.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button>Resume</Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
