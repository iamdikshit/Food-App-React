import React from "react";
import Card from "../Card/Card";
const Meal = () => {
  const foods = [
    {
      id: "1",
      name: "Sushi",
      description: "Finest fish and Veggies",
      price: 12,
      qty: "",
    },
    {
      id: "2",
      name: "Schnitzel",
      description: "A german specialisty",
      price: 16.99,
      qty: "",
    },
    {
      id: "3",
      name: "Barbecue Burger",
      description: "American raw meaty",
      price: 16.99,
      qty: "",
    },
  ];

  return (
    <div className="container mx-auto px-8 md:px-16 lg:px-24 py-16">
      <div className="bg-slate-200 rounded-md py-4 px-2">
        {foods.map((data) => (
          <Card
            key={data.id}
            id={data.id}
            title={data.name}
            description={data.description}
            price={data.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Meal;
