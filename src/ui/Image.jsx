/* eslint-disable react/prop-types */
function Image({
  imgPath = "icons/passport.JPG",
  width = "w-full md:w-[100%]",
  rounded = "rounded-xl",
  border = "md:border-8",
  position = "md:relative lg:-top-7 lg:-left-10 ",
}) {
  return (
    <div
      className={`${border} border-[#49cbe9] w-full md:w-full ${rounded} overflow-hidden md:overflow-visible group flex `}
    >
      <div>
        <img
          src={`/assets/${imgPath}`}
          alt=""
          className={`${width} ${position}  md:-top-5 md:-left-5 group-hover:scale-105 md:group-hover:scale-100 transition-transform duration-800 ${rounded}`}
        />
      </div>
    </div>
  );
}

export default Image;
