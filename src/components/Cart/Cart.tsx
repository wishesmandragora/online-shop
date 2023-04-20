import React from "react";
import CartProductListItem from "./CartProductListItem";
import { Product } from "../../types";

interface Props {
  cart: Product[];
}

const Cart: React.FC<Props> = ({ cart }) => {
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);
  const isCartEmpty = cart.length === 0;

  return (
    <div className="cart">
      <h2>Cart</h2>
      {isCartEmpty ? (
        <span>Your cart is empty</span>
      ) : (
        <>
          {cart.map((product) => (
            <CartProductListItem product={product} key={product.id} />
          ))}
          <hr />
          <div className="total">
            <h4>Total:</h4>
            <p>${totalPrice}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
