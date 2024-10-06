import PropTypes from "prop-types";
import "./ProductListItem.css";
import { Card } from "../../atoms/Card/Card.jsx";
import { Heading } from "../../atoms/Heading/Heading";
import { Text } from "../../atoms/Text/Text";
import { Button } from "../../atoms/Button/Button";

const ProductListItem = ({
  name,
  price,
  imageUrl,
  onAddToCart,
  isSoldOut,
  isOnSale,
}) => {
  return (
    <Card hightlight={isOnSale}>
      <Heading>
        {name} {isOnSale && "(onSale)"}
      </Heading>
      <img src={imageUrl} alt='product' />
      <Text>{price}</Text>
      <Button onClick={onAddToCart} disabled={isSoldOut}>
        {isSoldOut ? "out of stock" : "Add to cart"}
      </Button>
    </Card>
  );
};

// Define PropTypes to validate the props
ProductListItem.propTypes = {
  name: PropTypes.string.isRequired, // Name must be a string and required
  price: PropTypes.oneOfType([
    // Price can be a string or number
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  imageUrl: PropTypes.string.isRequired, // Image URL must be a string and required
  onAddToCart: PropTypes.func, // onAddToCart must be a function and required
  isSoldOut: PropTypes.func,
  isOnSale: PropTypes.func,
};

export { ProductListItem };
