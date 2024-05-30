function Image() {
  return (
    <div className="md:border-8 border-[#49cbe9] w-full md:w-full  rounded-xl overflow-hidden group flex ">
      <div>
        <img
          src="/public/assets/icons/passport.JPG"
          alt=""
          className="w-full md:w-[100%] relative md:-top-5 md:-left-5 lg:-top-7 lg:-left-8 group-hover:scale-105 transition-transform duration-800 rounded-xl"
        />
      </div>
    </div>
  );
}

export default Image;
