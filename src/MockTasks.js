import { v4 as uuidv4 } from 'uuid';
const MockTask =  [
    {
        id:uuidv4(),
        taskName:"Do requirement",
        isCompleted:false,
        createdDate: new Date("04/13/2021"),
        completedDate: ""
    },
    {
        id:uuidv4(),
        taskName:"Do proposal",
        isCompleted:false,
        createdDate: new Date("04/12/2021"),
        completedDate: ""
    },
    {
        id:uuidv4(),
        taskName:"Do react-app",
        isCompleted:false,
        createdDate: new Date("04/14/2021"),
        completedDate: ""
    }
]
export default MockTask;