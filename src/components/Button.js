import className from "classnames";

// Defining a component with various props and destructuring rest prop
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  // Creating string of concatenated class names using classNames function from Classnames library
  const classes = className(
    rest.className,
    "flex items-center px-3 py-1.5 border",
    {
      "border-blue-500 bg-blue-500 text-white": primary,
      "border-gray-900 bg-gray-900 text-gray-900": secondary,
      "border-green-500 bg-green-500 text-green-500": success,
      "border-yellow-400 bg-yellow-400 text-white": warning,
      "border-red-500 bg-red-500 text-red-500": danger,
      "rounded-full": rounded,
      "bg-white": outline,
    }
  );

  // Returning a button element with calculated class names and original props
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

// Defining propTypes to validate that only one button variation is true at a time
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        "Only one of primary, secondary, success, warning, danger can be true"
      );
    }
  },
};

export default Button;
