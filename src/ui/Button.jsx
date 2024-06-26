/* eslint-disable react/prop-types */
function Button({ children, onClick, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`primary-btn  px-8 md:px-10 py-3 rounded-md hover:scale-95 transition-all duration-300 font-medium tracking-wide shadow-2xl shadow-slate-950 ${
        disabled && "cursor-not-allowed opacity-50"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
