import { v4 as uuidv4 } from "uuid";

export default [
  {
    id: uuidv4(),
    completed: false,
    taskName: "Homework",
    dayCreated: new Date().getTime(),
    dayDone: "",
  },
  {
    id: uuidv4(),
    completed: false,
    taskName: "Household chores",
    dayCreated: new Date().getTime() + 1,
    dayDone: "",
  },
  {
    id: uuidv4(),
    completed: false,
    taskName: "Personal task",
    dayCreated: new Date().getTime() + 2,
    dayDone: "",
  },
];
