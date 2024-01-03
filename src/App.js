import React from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, resNumber } from "./action";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <div className="container">
        <h1>Counter App</h1>
        <h4>Using React and Redux</h4>
        <hr />
        <div className="quantity">
          <button
            onClick={() => dispatch(incNumber(5))}
            className="quantity_plus"
            title="Increment"
          >
            <span> + </span>
          </button>
          <input
            name="quantity"
            className="quantity_input"
            type=" text"
            value={myState}
          />
          <button
            onClick={() => dispatch(decNumber())}
            className="quantity_minus"
            title="Decrement"
          >
            <span> - </span>
          </button>
          <br />
          <button
            onClick={() => dispatch(resNumber())}
            className="quantity_zero"
            title="Reset"
          >
            <span> Reset </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
