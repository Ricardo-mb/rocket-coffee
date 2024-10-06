import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ children, hightlight }) => {
  const cardClassName = hightlight ? "card sale" : "card";
  return <div className={cardClassName}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  hightlight: PropTypes.bool,
};

export { Card };
