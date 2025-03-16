import Card from "./components/Card.jsx";
// import Details from "./components/Details.jsx";
import BlogPost from "./components/BlogPost.jsx";
import Counter from "./components/Counter.jsx";
import {videos} from "./video-data.js";
import styles from './App.module.css';
import {posts} from "./tech-data.js";
import {Fragment, lazy, Suspense, useReducer, useState} from "react";
import {ErrorBoundary} from "react-error-boundary";
import CounterTwo from "./components/CounterTwo.jsx";
import TextToggle from "./components/TextToggle.jsx";
import UseReducerCounter from "./components/UseReducerCounter.jsx";
import {CounterContext} from "./CounterContext.js";
import UseContextCounter from "./components/UseContextCounter.jsx";
import CustomHookCounter from "./components/CustomHookCounter.jsx";

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



    // const darkMode = false;
    // const darkModeClass = darkMode ? styles['dark-mode'] : styles['light-mode'];
    //
    // const firstThree = posts.slice(0, 3);
    // const lastTow = posts.slice(3);
    //
    // return (
    //     <div className={`${styles.wrapper} ${darkModeClass}`}>
    //         {firstThree.map(post => (<Card key={post.id} video={post} styles={{color: 'red'}}/>))}
    //
    //         <ErrorBoundary fallback={<div>Something went wrong</div>}>
    //             <Suspense fallback={<div>Loading...</div>}>
    //                 {lastTow.map(post => (<LastTwo key={post.id} post={post} />))}
    //             </Suspense>
    //         </ErrorBoundary>
    //     </div>
    // );

    // const value = useReducer(counterReducer, initialState);
    // return (
    //     <div className={styles.wrapper}>
    //         <CounterContext.Provider value={value}>
    //             <CustomHookCounter />
    //         </CounterContext.Provider>
    //     </div>
    // );

    // const [filteredVideos, setFilteredVideos] = useState(videos);
    // const [selectedGenre, setSelectedGenre] = useState('All')
    // const genres = ['Drama', 'Science Fiction', 'Horror', 'Action', 'All'];
    // const filterByGenre = (genre) => {
    //     setSelectedGenre(genre);
    //     if (genre === 'All') {
    //         setFilteredVideos(videos);
    //         return;
    //     }
    //     setFilteredVideos(videos.filter(v => v.genre === genre));
    // }
    // return (
    //     <Fragment>
    //         <header className={styles.buttons}>
    //             {genres.map((genre, index) => (
    //                 <button key={index} onClick={() => filterByGenre(genre)}>{genre}</button>
    //             ))}
    //             <h1>Showing {selectedGenre} videos</h1>
    //         </header>
    //         <div className={styles.wrapper}>
    //             {filteredVideos.map((video) => (
    //                 <Card key={video.id} video={video}></Card>
    //             ))}
    //         </div>
    //     </Fragment>
    // );


}

export default App
