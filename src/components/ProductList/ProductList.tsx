import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "../../types";

interface Props {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const ProductList: React.FC<Props> = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
