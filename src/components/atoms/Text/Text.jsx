import PropTypes from "prop-types";

export const Text = ({ children }) => {
  return <span>{children}</span>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
};
