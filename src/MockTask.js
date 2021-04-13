import { v4 as uuidv4 } from 'uuid';

const MockTasks = [
    {
        id: uuidv4() ,
        taskName: "Lam bai tap",
        completed: false,
        time: 1
    },

    {
        id: uuidv4() ,
        taskName: "Khong lam bai tap",
        completed: true,
        time: 2
    },

    {
        id: uuidv4() ,
        taskName: "Bo hoc",
        completed: true,
        time: 3
    }
];
export default MockTasks