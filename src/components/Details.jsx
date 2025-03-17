import {Fragment, useContext} from "react";
import {CounterContext} from "../CounterContext.js";
import useLifecycleLog from "../useLifecycleLog.js";
import {useParams} from "react-router-dom";
import {videos} from "../video-data.js";

const Details = () => {
    // const [state, dispatch] = useContext(CounterContext);
    // useLifecycleLog("Details")
    //
    // return (
    //     <Fragment>
    //         <h1>Video title</h1>
    //         <p>{state.countOne}</p>
    //         <p>{state.countTwo}</p>
    //     </Fragment>
    // );

    const {id} = useParams();
    const video = videos.find((video) => video.id === parseInt(id));
    return (
        <Fragment>
            <h1>{video.title}</h1>
            <p>{video.description}</p>
            <p>{video.genre}</p>
        </Fragment>
    );
}

export default Details;
