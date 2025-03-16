import {Fragment, useContext} from "react";
import {CounterContext} from "../CounterContext.js";
import useLifecycleLog from "../useLifecycleLog.js";

const Details = () => {
    const [state, dispatch] = useContext(CounterContext);
    useLifecycleLog("Details")

    return (
        <Fragment>
            <h1>Video title</h1>
            <p>{state.countOne}</p>
            <p>{state.countTwo}</p>
        </Fragment>
    );
}

export default Details;
