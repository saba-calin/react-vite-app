import Card from "./components/Card.jsx";
// import Details from "./components/Details.jsx";
import BlogPost from "./components/BlogPost.jsx";
import Counter from "./components/Counter.jsx";
import {videos} from "./video-data.js";
import styles from './App.module.css';
import {posts} from "./tech-data.js";
import {Fragment, lazy, Suspense, useEffect, useReducer, useState} from "react";
import {ErrorBoundary} from "react-error-boundary";
import CounterTwo from "./components/CounterTwo.jsx";
import TextToggle from "./components/TextToggle.jsx";
import UseReducerCounter from "./components/UseReducerCounter.jsx";
import {CounterContext} from "./CounterContext.js";
import UseContextCounter from "./components/UseContextCounter.jsx";
import CustomHookCounter from "./components/CustomHookCounter.jsx";
import axios from "axios";
import HomePage from "./pages/HomePage.jsx";
import {NavLink, Outlet} from "react-router-dom";

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

const MyNavLink = (props) => {
    return <NavLink to={props.to} className={({isActive}) => isActive ? "link-red" : "link-black"}>{props.children}</NavLink>
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

    // styling
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

    // hooks challenge
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



    // fetch
    // const [pokemonList, setPokemonList] = useState(null);  // could use '{results: []}' instead of null
    // useEffect(() => {
    //     const fetchData = async () => {
    //         await new Promise(res => setTimeout(res, 2000));
    //         const response = await fetch('https://pokeapi.co/api/v2/pokemon');
    //         const data = await response.json();
    //         setPokemonList(data);
    //         // console.log(data);
    //         // console.log(pokemonList);
    //     }
    //     fetchData();
    // }, []);
    //
    // useEffect(() => {
    //     if (pokemonList != null) {
    //         console.log(pokemonList.results);
    //     }
    // }, [pokemonList]);
    //
    // if (pokemonList?.results) {  // chaining - (checks if 'pokemonList' exists first, then checks the 'results'
    //     return (
    //         <Fragment>
    //             <h1>Pokemon</h1>
    //             {pokemonList.results.map(p => (<div key={p.name}>{p.name}</div>))}
    //         </Fragment>
    //     );
    // }
    // else {
    //     return <div>Loading...</div>
    // }



    // axios
    // const [pokemonList, setPokemonList] = useState(null);  // could use '{results: []}' instead of null
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             await new Promise(res => setTimeout(res, 2000));
    //             const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon');
    //             setPokemonList(data);
    //         }
    //         catch (error) {
    //             alert(error);
    //         }
    //     }
    //     fetchData();
    // }, []);
    //
    // if (pokemonList?.results) {  // chaining - (checks if 'pokemonList' exists first, then checks the 'results'
    //     return (
    //         <Fragment>
    //             <h1>Pokemon</h1>
    //             {pokemonList.results.map(p => (<div key={p.name}>{p.name}</div>))}
    //         </Fragment>
    //     );
    // }
    // else {
    //     return <div>Loading...</div>
    // }



    // axios challenge
    // const [list, setList] = useState(null);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             await new Promise(res => setTimeout(res, 2000));
    //             const {data} = await axios.get('https://swapi.dev/api/people');
    //             setList(data);
    //         }
    //         catch (error) {
    //             alert(error);
    //         }
    //     }
    //     fetchData();
    // }, [])
    //
    // if (list?.results) {
    //     return (
    //         <Fragment>
    //             {list.results.map(e => (<div key={e.name}>{e.name}</div>))}
    //         </Fragment>
    //     );
    // }
    // else {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className={styles.wrapper}>
            <nav>
                <MyNavLink to={"/"}>Home</MyNavLink>
                <MyNavLink to={"/about-us"}>About Us</MyNavLink>
                <MyNavLink to={"/contact-us"}>Contact Us</MyNavLink>
                <MyNavLink to={"/todo"}>To Do List</MyNavLink>
            </nav>
            <Outlet />
        </div>
    );
}

export default App
