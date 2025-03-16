import {useEffect, useReducer, useState} from "react";

const initialState = {
    countOne: 0,
    countTwo: 0
};

const counterReducer = (state, action) => {
    const actions = {
        increment: () => ({...state, countOne: state.countOne + 1}),
        decrement: () => ({...state, countTwo: state.countTwo - 1}),
        reset: () => initialState
    };
    return actions[action] ? actions[action]() : state;
}

const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <section>
            <h1>{state.countOne}</h1>
            <button onClick={() => dispatch('increment')}>+</button>
            <h1>{state.countTwo}</h1>
            <button onClick={() => dispatch('decrement')}>-</button>
            <br></br>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </section>
    );
}

export default Counter;
