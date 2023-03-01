import React, { useReducer } from "react";
import CartContex from "./CartContext";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, actions) => {
  if (actions.type === "ADD") {
    // Search Whether item is already present or not?
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === actions.item.id
    );
    let updatedItem;
    let updatedItems;
    //if already present update amount
    const existingItem = state.items[existingItemIndex];
    if (existingItem) {
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + actions.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }
    //if not present insert new item
    else {
      updatedItems = state.items.concat(actions.item);
    }

    const totalAmount =
      state.totalAmount + actions.item.price * actions.item.amount;

    return { items: updatedItems, totalAmount: totalAmount };
  } else if (actions.type === "REMOVE") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === actions.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItem;
    let updatedItems;
    if (existingItem.amount > 1) {
      updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.filter((item) => item.id !== actions.id);
    }
    const totalAmount = state.totalAmount - existingItem.price;
    return { items: updatedItems, totalAmount: totalAmount };
  } else {
    return defaultCart;
  }
};

// Context Provider
const CartContextProvider = (props) => {
  // Reducer for Cart
  const [cart, dispatchCart] = useReducer(cartReducer, defaultCart);
  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };
  const cartCtx = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContex.Provider value={cartCtx}>{props.children}</CartContex.Provider>
  );
};

export default CartContextProvider;
