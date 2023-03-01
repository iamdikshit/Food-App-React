import React from "react";
import { IoRemove, IoAdd } from "react-icons/io5";

const CartCard = (props) => {
  return (
    <div className="card flex items-center justify-between border-b border-b-red-800 py-4">
      <div className="order-details flex flex-col gap-4">
        <h1 className="font-bold text-lg">{props.name}</h1>
        <div className="flex gap-4">
          <span className="text-red-900 font-bold text-lg">${props.price}</span>
          <span className="p-1 border border-gray-400 text-xs">
            x{props.amount}
          </span>
        </div>
      </div>
      <div className="amount flex gap-2">
        <button
          onClick={props.onRemove}
          className="py-1 px-2 border border-red-900 font-bold text-red-900"
        >
          <IoRemove />
        </button>
        <button
          onClick={props.onAdd}
          className="py-1 px-2 border border-red-900 font-bold text-red-900"
        >
          <IoAdd />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
