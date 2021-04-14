import { v4 as uuidv4 } from "uuid";

const MockTasks = [
  {
    id: uuidv4(),
    completed: false,
    taskName: "Làm bài tập",
  },
  {
    id: uuidv4(),
    completed: true,
    taskName: "Không làm bài tập nữa",
  },
  {
    id: uuidv4(),
    completed: false,
    taskName: "Bỏ học",
  },
];

export default MockTasks;
