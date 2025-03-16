import {useContext, useEffect, useState} from "react";
import {CounterContext} from "../CounterContext.js";
import useLifecycleLog from "../useLifecycleLog.js";
import Details from "./Details.jsx";

const CustomHookCounter = () => {
    const [state, dispatch] = useContext(CounterContext);
    useLifecycleLog("Counter");

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

export default CustomHookCounter;
