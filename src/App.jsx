import Card from "./components/Card.jsx";
// import Details from "./components/Details.jsx";
import BlogPost from "./components/BlogPost.jsx";
import {videos} from "./video-data.js";
import styles from './App.module.css';
import {posts} from "./tech-data.js";
import {Fragment, lazy, Suspense} from "react";
import {ErrorBoundary} from "react-error-boundary";  // named import

const Details = lazy(async () => {
    await new Promise(res => setTimeout(res, 2000));
    return Promise.reject("fail");
    return import("./components/Details.jsx");
});

const LastTwo = lazy(async () => {
    await new Promise((res) => setTimeout(res, 1500));
    // return Promise.reject('');
    return import("./components/LastTwo.jsx");
})

const App = () => {
    // const showDetails = false;
    // return showDetails ? (
    //     <ErrorBoundary fallback={<div>Something has gone wrong</div>}>
    //         <Suspense fallback={<div>Loading...</div>}>
    //             <Details />
    //         </Suspense>
    //     </ErrorBoundary>
    // ) : (
    //     <Fragment>
    //         {videos.filter(video => video.genre === 'Drama').map(video => (
    //             <Card key={video.key} video={video}/>
    //         ))}
    //     </Fragment>
    // );

    const darkMode = false;
    const darkModeClass = darkMode ? styles['dark-mode'] : styles['light-mode'];

    const firstThree = posts.slice(0, 3);
    const lastTow = posts.slice(3);

    return (
        <div className={`${styles.wrapper} ${darkModeClass}`}>
            {firstThree.map(post => (<Card key={post.id} video={post} styles={{color: 'red'}}/>))}

            <ErrorBoundary fallback={<div>Something went wrong</div>}>
                <Suspense fallback={<div>Loading...</div>}>
                    {lastTow.map(post => (<LastTwo key={post.id} post={post} />))}
                </Suspense>
            </ErrorBoundary>
        </div>
    );
}

export default App
