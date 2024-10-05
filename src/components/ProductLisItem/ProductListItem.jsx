import PropTypes from "prop-types";
import "./ProductListItem.css";

const ProductListItem = ({ name, price, imageUrl, onAddToCart, isSoldOut }) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <img src={imageUrl} alt='product' />
      <small>{price}</small>
      <button onClick={onAddToCart} disabled={isSoldOut}>
        {isSoldOut ? "out of stock" : "Add to cart"}
      </button>
    </div>
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
};

export { ProductListItem };
