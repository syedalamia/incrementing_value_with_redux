import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createStore } from "redux";

const addcart = () => {};
function App() {
  const stateCart = useSelector((state) => state);

  const dispatch = useDispatch();

  const [Flowerstate, setFlowerstate] = useState({
    name: "Rose",
    quantity: 20,
  });
  const addcart = () => {
    dispatch({
      type: "ADD_FLOWER",
      payload: stateCart.cart ? stateCart.cart + 1 : Flowerstate.quantity,
    });
  };

  console.log("the useselector value i get inside app.js", stateCart);
  console.log("length of statecart", stateCart.length);
  return (
    <div className="App">
      <>
        {stateCart.cart ? (
          <>
            <p>
              the flower name is {Flowerstate.name} and the incrementing
              quantity will be {stateCart.cart}
            </p>
          </>
        ) : (
          <>
            <p>
              the flower name is {Flowerstate.name} and the incrementing
              quantity will be {Flowerstate.quantity}
            </p>
          </>
        )}
        <button onClick={addcart}>Click here to increase</button>{" "}
      </>
    </div>
  );
}

export default App;
