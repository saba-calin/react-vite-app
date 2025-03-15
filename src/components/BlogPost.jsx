import {Fragment} from "react";

const clickHandler = () => {
    alert("sup")
}

const BlogPost = ({title= '5 Simple Steps to', children}) => {
    return (
        <Fragment>
            <h1>{title}</h1>
            <div>{children}</div>
            <button onClick={clickHandler}>Click ME!</button>
        </Fragment>
    );
}

export default BlogPost;
