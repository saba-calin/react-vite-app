// components in React are JavaScript functions
const Card = ({video}) => {
    // const title = props.title ?? 'Default Value';  // coalescent operator
    // const {title = 'Default Title', description} = props;  // object destructuring

    const handleClick = () => {
        alert('button clicked')
    }

    return video.genre === 'Horror' ? (
        <div>
            <h1>{video.title}</h1>
            <p>{video.description}</p>
            <button onClick={handleClick}>View</button>
        </div>
    ) : null;
};

export default Card;
