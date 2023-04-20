import React from "react";
import { Product } from "../../types";

interface Props {
  product: Product;
}

const CartProductListItem: React.FC<Props> = ({ product }) => {
  return (
    <div>
      <h4>{product.title}</h4>
      <p>${product.price}</p>
    </div> 
  );
};

export default CartProductListItem;
