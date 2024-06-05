import Stack from "./Stack";

function TechStack() {
  return (
    <div className="flex flex-col items-center gap-11 mt-24 md:mt-28">
      <div className="text-center">
        <h2 className="heading">Tech Stack</h2>
        <p className="text-gray-300">Technologies I work with</p>
      </div>

      <div className="flex flex-wrap gap-6 md:gap-10 justify-center items-center">
        <Stack stack="html">HTML5</Stack>
        <Stack stack="css">CSS3</Stack>
        <Stack stack="tailwind">Tailwind</Stack>
        <Stack stack="css">CSS3</Stack>
        <Stack stack="javascript">JavaScript</Stack>
        <Stack stack="react">React</Stack>
        <Stack stack="html">HTML5</Stack>
        <Stack stack="redux">Redux</Stack>
      </div>
    </div>
  );
}

export default TechStack;
