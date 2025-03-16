import {useContext, useEffect, useReducer, useState} from "react";
import {CounterContext} from "../CounterContext.js";
import Details from "./Details.jsx";

const Counter = () => {
    const [state, dispatch] = useContext(CounterContext);
    
    return (
        <section>
            <h1>{state.countOne}</h1>
            <button onClick={() => dispatch('increment')}>+</button>
            <h1>{state.countTwo}</h1>
            <button onClick={() => dispatch('decrement')}>-</button>
            <br></br>
            <button onClick={() => dispatch('reset')}>Reset</button>
            <Details />
        </section>
    );
}

export default Counter;
