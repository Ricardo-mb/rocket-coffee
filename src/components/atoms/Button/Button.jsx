import PropTypes from "prop-types";
import "./Button.css";

export const Button = ({ children, onAddToCart }) => {
  return <button onClick={onAddToCart}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onAddToCart: PropTypes.func,
};
