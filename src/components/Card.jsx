import styles from './Card.module.css'

// components in React are JavaScript functions
const Card = ({video}) => {
    // const title = props.title ?? 'Default Value';  // coalescent operator
    // const {title = 'Default Title', description} = props;  // object destructuring

    const handleClick = () => {
        alert('button clicked')
    }

    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{video.title}</h1>
            <p className={styles.desc}>{video.description}</p>
            <button onClick={handleClick} className={styles.button}>View</button>
        </div>
    );
};

export default Card;
