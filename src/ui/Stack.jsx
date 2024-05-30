/* eslint-disable react/prop-types */
function Stack({ children, stack }) {
  return (
    <div className="space-y-1 flex flex-col items-center">
      <img src={`/assets/icons/${stack}.svg`} alt="" className="w-12 md:w-16" />
      <p className="paragraph">{children}</p>
    </div>
  );
}

export default Stack;
