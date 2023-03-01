import React, { useContext, useState } from "react";
import { IoCart } from "react-icons/io5";
import Cart from "../Cart/cart";
import CartContex from "../Store/CartContext";

const Header = (props) => {
  const [isCart, setIsCart] = useState(false);
  const kartCtx = useContext(CartContex);
  const cartNumber = kartCtx.items.length;
  const CartModalOpen = () => {
    setIsCart(true);
  };
  const CartModalClose = () => {
    setIsCart(false);
  };
  return (
    <React.Fragment>
      <div className="h-16 md:h-24 bg-red-800 px-8 md:px-16 py-2 flex items-center justify-between">
        <h1 className="text-2xl md:text-4xl font-bold text-white">Food App</h1>
        <div>
          <div
            className="cursor-pointer bg-red-900 flex justify-between items-center px-4 py-2 rounded-full gap-4"
            onClick={CartModalOpen}
          >
            <h1 className="text-white text-sm md:text-lg">Your Cart</h1>
            <span className="flex items-center relative ">
              <IoCart className="w-4 h-4 md:w-8 md:h-8 text-white" />
              <span className="absolute -right-4 -top-2 md:-right-1 md:top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                {cartNumber}
              </span>
            </span>
          </div>
        </div>
      </div>
      {isCart && <Cart onClick={CartModalClose} />}
    </React.Fragment>
  );
};

export default Header;
