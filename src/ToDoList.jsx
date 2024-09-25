

import React, { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a Shower", "Start Coding"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value); // Corrected 'values' to 'value'
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks); // Call setTasks with updatedTasks
        }
    }

    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks); // Call setTasks with updatedTasks
        }
    }

    return (
        <>
            <div className='to-do-list'>
                <h1>TO-DO LIST</h1>

                <div>
                    <input
                        type="text"
                        placeholder='Enter a task'
                        value={newTask}
                        onChange={handleInputChange}
                    />

                    <button
                        className='add-button'
                        onClick={addTask}
                    >
                        Add Task {/* Added button text */}
                    </button>
                </div>

                <ol>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            <span className='text'>{task}</span>
                            <button className='delete-button' onClick={() => deleteTask(index)}>
                                Delete
                            </button>

                            <button className='move-button' onClick={() => moveTaskUp(index)}>
                                👆
                            </button>

                            <button className='move-button' onClick={() => moveTaskDown(index)}>
                                👇
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        </>
    );
}

export default ToDoList;
