import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import CartCard from "./CartCard";
import Button from "../UI/Button/Button";
import CartContex from "../Store/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Cart = (props) => {
  const [isItem, setIsItem] = useState(false);
  const CartDataCtx = useContext(CartContex);
  const itemNumber = CartDataCtx.items.length;
  useEffect(() => {
    console.log("useeffect");
    if (itemNumber < 1) {
      setIsItem(true);
    } else {
      setIsItem(false);
    }
  }, [itemNumber]);

  const notify = () => {
    toast.success("Order Success full", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const cartAddItem = (item) => {
    CartDataCtx.addItem({ ...item, amount: 1 });
  };
  const cartRemoveItem = (id) => {
    CartDataCtx.removeItem(id);
  };
  const totalAmount = `$${CartDataCtx.totalAmount.toFixed(2)}`;
  const BackDrop = (props) => {
    return (
      <div className="bg-black fixed top-0 left-0 w-full h-screen backdrop-blur-sm bg-opacity-50 z-10"></div>
    );
  };

  const OverLay = (props) => {
    return (
      <div className="absolute w-full h-screen z-50 flex items-center px-4 ">
        <div className="container mx-auto w-full max-w-lg bg-white p-4 rounded-md">
          {CartDataCtx.items.map((item) => (
            <CartCard
              key={item.id}
              id={item.id}
              name={item.name}
              amount={item.amount}
              price={item.price}
              onAdd={cartAddItem.bind(null, item)}
              onRemove={cartRemoveItem.bind(null, item.id)}
            />
          ))}

          <div className="total amount flex items-end justify-between mt-4">
            <h1 className="font-bold text-2xl text-red-900">Total Amount</h1>
            <h1 className="font-bold text-2xl text-red-900">{totalAmount}</h1>
          </div>

          <div className="action amount flex items-center justify-end mt-4 gap-4">
            <Button
              label={"Close"}
              onClick={props.onClick}
              buttonInfo={{
                className:
                  "py-1 px-4 border border-red-900 rounded-full text-red-900",
              }}
            />

            {!isItem && (
              <Button
                label={"Order"}
                buttonInfo={{
                  className:
                    "py-1 px-4 border border-red-900 rounded-full text-white bg-red-900",
                }}
                onClick={notify}
              />
            )}
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <BackDrop />,
        document.getElementById("root-backdrop")
      )}
      {ReactDOM.createPortal(
        <OverLay onClick={props.onClick} />,
        document.getElementById("root-overlay")
      )}
    </React.Fragment>
  );
};

export default Cart;
