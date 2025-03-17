import {Fragment, useEffect, useState} from "react";

const ToDoList = () => {
    const [taskList, setTaskList] = useState([]);

    const handleSubmit = (eventObj) => {
        eventObj.preventDefault();
        const data = new FormData(eventObj.target);
        const formattedData = Object.fromEntries(data.entries());

        if (formattedData.task === '') {
            alert("The input filed cannot be empty!");
            return;
        }

        setTaskList([...taskList, formattedData]);
    }

    useEffect(() => {
        // console.log(taskList);
        taskList.forEach(e => console.log(e));
    }, [taskList]);

    return (
        <Fragment>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">New Task</label>
                <input type="text" id="task" name="task"/>
                <button type="submit">Add Task</button>
                <ul>
                    {taskList.map((e, index) => (<li key={index}>{e.task}</li>))}
                </ul>
            </form>
        </Fragment>
    );
}

export default ToDoList;
