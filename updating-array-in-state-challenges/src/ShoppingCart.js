//Challenge 1 & 2
// Update  and remove an item in the shopping cart

//Fill in the handleIncreaseClick logic so that pressing ”+” increases the corresponding number:

import { useState } from "react";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1
  },
  {
    id: 1,
    name: "Cheese",
    count: 5
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2
  }
];
export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  function handleIncrementClick(productId) {
    let nextNumber = products.map((product) => {
      if (product.id === productId) {
        return { ...product, count: product.count + 1 };
      } else return product;
    });

    setProducts(nextNumber);
  }

  function handleDecrementClick(productId) {
    let previousNumber = products.map((product) => {
      if (product.id === productId) {
        return { ...product, count: product.count - 1 };
      } else return product;
    });

    //filter to remove products when their count is 1, the product should automatically get removed from the cart.
    previousNumber = previousNumber.filter((p) => p.count > 0);
    console.log(previousNumber);

    setProducts(previousNumber);
  }

  return (
    <>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} (<b>{product.count}</b>){" "}
            <button
              onClick={() => {
                handleIncrementClick(product.id);
              }}
            >
              +
            </button>{" "}
            <button onClick={() => handleDecrementClick(product.id)}>-</button>
          </li>
        ))}
      </ul>
    </>
  );
}
