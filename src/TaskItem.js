import { Checkbox } from "antd";
import classes from "./TaskItem.module.css";
function TaskItem({taskItem,onCompletionStageChanged}){
    const handleChange = (e)=>{
        onCompletionStageChanged(taskItem.id, e.target.checked);
    }
    return(
        <div className={classes.todoContainer}>
          <Checkbox id={taskItem.id} className={taskItem.isCompleted? classes.completed : ""} onChange={handleChange} checked={taskItem.isCompleted}>{taskItem.taskName}</Checkbox>
          <p className={classes.createdDate}>Created date: {taskItem.createdDate.toDateString()}</p>
          <p className={taskItem.isCompleted ? classes.textSuccess:classes.textRed}>{taskItem.isCompleted ? "Compledted date: "+ taskItem.completedDate.toDateString() :"Not Complete"}</p>
        </div>
    )
}

export default TaskItem;