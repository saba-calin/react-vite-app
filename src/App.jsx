import './App.css'
import Card from "./components/Card.jsx";
import Details from "./components/Details.jsx";
import BlogPost from "./components/BlogPost.jsx";
import {videos} from "./video-data.js";
import {Fragment} from "react";  // named import

const App = () => {
    return (
        <Fragment>
            {videos.map(video => (<Card key={video.id} video={video} />))}
        </Fragment>
    );
}

export default App
