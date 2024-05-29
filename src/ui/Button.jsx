/* eslint-disable react/prop-types */
function Button({ children, onClick }) {
  return (
    <button
      className="primary-btn px-8 md:px-10 py-3 rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
