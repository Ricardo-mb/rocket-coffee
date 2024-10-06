import PropTypes from "prop-types";

const Heading = ({ children }) => {
  return <h2>{children}</h2>;
};
export { Heading };

Heading.propTypes = {
  children: PropTypes.node.isRequired,
};
