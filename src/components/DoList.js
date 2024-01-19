import { useReducer, useState } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return { tasks: [...state.tasks, action.payload] };
        case "REMOVE_TASK":
            return { tasks: state.tasks.filter(task => task.id !== action.payload) };
        default:
            return state;
    }
};

const init = (tasks) => {
    tasks = { tasks: [] };
    return tasks;
};


const TaskList = () => {
    const [taskInput, setTaskInput] = useState("");
    const [state, dispatch] = useReducer(reducer, { tasks: [] }, init);


    const addTask = () => {
        if (taskInput.trim() !== "") {
            const newTask = { id: Date.now(), text: taskInput };
            dispatch({ type: "ADD_TASK", payload: newTask });
            setTaskInput("");
        }
    };

    const removeTask = (taskId) => {
        dispatch({ type: "REMOVE_TASK", payload: taskId });
    };


    return (
        <div>
            <ul className="list-group my-5">
                {state.tasks.map(task => (
                    <li key={task.id} className="list-group-item">
                        {task.text}
                        <button onClick={() => removeTask(task.id)} className="btn btn-danger ms-3">Eliminar</button>
                    </li>
                ))}
            </ul>
            <div className="my-5">
                <input
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
                <button onClick={addTask} className="btn btn-primary ms-3">Agregar Tarea</button>
            </div>
        </div>
    );
};

export default TaskList;