import React, { useContext, useRef } from "react";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import CartContex from "../Store/CartContext";


const Card = (props) => {
  const InputRef = useRef();
  const cardCartContext = useContext(CartContex);

  const price = props.price.toFixed(2);

  const mealFormHandler = (event) => {
    event.preventDefault();
    const enteredInput = InputRef.current.value;
    const enteredNumber = +enteredInput;

    if (
      enteredInput.trim().lenght === 0 ||
      enteredNumber < 1 ||
      enteredNumber > 5
    ) {
      return;
    }
    console.log(enteredNumber);

    cardCartContext.addItem({
      id: props.id,
      name: props.title,
      price: price,
      description: props.description,
      amount: enteredNumber,
    });
    
  };
  return (
    <div className="card p-4 flex items-center justify-between border-b border-gray-400 ">
      <div>
        <h1 className="font-bold text-lg">{props.title}</h1>
        <p>
          <i>{props.description}</i>
        </p>
        <span className="text-red-900 font-bold text-lg">${price}</span>
      </div>
      <form
        onSubmit={mealFormHandler}
        className="flex flex-col items-end gap-2 md:gap-4"
      >
        <Input
          ref={InputRef}
          label={"Amount"}
          labelInfo={{
            htmlFor: "amount_" + props.id,
            className: "font-bold",
          }}
          input={{
            type: "number",
            className: "focus:outline-none",
            name: "amount",
            id: "amount_" + props.id,
            min: "0",
            max: "10",
          }}
        />
        <Button
          label={"+Add"}
          buttonInfo={{
            className: "px-8 py-1 bg-red-900 text-white rounded-full font-bold",
          }}
        />
      </form>
     
    </div>
  );
};

export default Card;
