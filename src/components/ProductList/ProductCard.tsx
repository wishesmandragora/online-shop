import React from "react";
import { Product } from "../../types";

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <p>${product.price}</p>
      <button className="card-btn" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
