import styles from './Card.module.css'

const handleClick = () => {
    alert('button clicked');
}

const LastTwo = ({post}) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.desc}>{post.description}</p>
            <button onClick={handleClick} className={styles.button}>Click ME!</button>
        </div>
    );
}

export default LastTwo;
