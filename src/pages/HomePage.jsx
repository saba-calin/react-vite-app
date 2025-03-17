import {Fragment, useEffect, useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {videos} from "../video-data.js";
import Card from "../components/Card.jsx";
import axios from "axios";

const HomePage = () => {
    return (
        <Fragment>
            {/*<nav>*/}
            {/*    <NavLink to={"/"} style={({isActive}) => ({color: isActive ? 'red' : 'black'})}>Home</NavLink>*/}
            {/*    <NavLink to={"/about-us"}>About Us</NavLink>*/}
            {/*</nav>*/}
            <h1>Home</h1>
            <p>
                Welcome to our video streaming website! We offer a vast collection of movies and TV shows from different genres,
                including action, comedy, romance, and science fiction. Browse through our top picks, discover new titles, and
                binge-watch your favorites. Our streaming service is available across multiple platforms, including mobile
                devices, smart TVs, and gaming consoles. We also provide high-quality video and audio to enhance your viewing
                experience. Join now and start your entertainment journey with us!
            </p>
            {videos.map(v => (<Card video={v}/>))}
        </Fragment>
    );



    // routing challenge
    // const [list, setList] = useState(null);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const {data} = await axios.get('https://swapi.dev/api/people');
    //         setList(data);
    //     }
    //     fetchData();
    // }, []);
    //
    // useEffect(() => {
    //     console.log(list);
    // }, [list]);
    //
    // if (list?.results) {
    //     return (
    //         <Fragment>
    //             {list.results.map(e => <Card video={{title: `${e.name}`, description: `${e.eye_color} ${e.hair_color}`, id: `${e.name}`}}/>)}
    //         </Fragment>
    //     );
    // }
    // else {
    //     return <div>Loading...</div>;
    // }
}

export default HomePage;
