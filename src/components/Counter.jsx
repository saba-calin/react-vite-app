import {useEffect, useState} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {  // runs only when the component is mounted or unmounted
        console.log("component mounted");
        setMounted(true);
    }, []);
    useEffect(() => {  // runs only when the reactive value 'count' is changed
        if (mounted) {
            console.log("value changed");
        }
        return () => console.log("component has unmounted")  // used for clean-up phase
    }, [count]);

    const increment = () => {
        if (count < 10) {
            setCount(count + 1);
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <section>
            <h1>{count}</h1>
            <h1>Count + 1: {count + 1}</h1>
            <h1>Count + 2: {count + 2}</h1>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        </section>
    );
}

export default Counter;
