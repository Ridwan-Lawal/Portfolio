/* eslint-disable react/prop-types */
function FormInput({ children, label, error }) {
  return (
    <div className="space-y-3 form">
      <label htmlFor={children.props.id} className="cursor-pointer">
        {label}
      </label>
      {children}
      {error && <p className="form-error">{error}</p>}
    </div>
  );
}

export default FormInput;
