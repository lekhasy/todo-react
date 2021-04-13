import React from 'react'
import classes from "./TodoList.module.css";
import {Checkbox} from "antd";

function TaskItem ( { item, onHandleCompletedChange}) {
    const handleChange = (event) => {
        onHandleCompletedChange(item.id, event.target.checked);
    }; 
    
    return (
        <div className={classes.todoContainer}>
            <Checkbox className={item.completed ? classes.completedTask: ""} onChange={handleChange} checked={item.completed}>{item.taskName}</Checkbox>
        </div>
    )
}
export default TaskItem
