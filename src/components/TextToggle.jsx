import {useState} from "react";

const TextToggle = () => {
    const [text, setText] = useState("ON");

    return (
        <div>
            <h1>{text}</h1>
            <button onClick={() => text === "ON" ? setText("OFF") : setText("ON")}>Switch</button>
        </div>
    );
}

export default TextToggle;
