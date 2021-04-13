import { Checkbox } from "antd";
import classes from "./TodoList.module.css";
function TaskItem({item,onCompletionStageChanged}){
    const handleChange = (e)=>{
        onCompletionStageChanged(item.id, e.target.checked);
    }
    return(
        <div className={classes.todoContainer}>
          <Checkbox id={item.id} onChange={handleChange} checked={item.isCompleted}>{item.taskName}</Checkbox>
        </div>
    )
}

export default TaskItem;