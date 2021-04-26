import React, { useEffect, useState } from "react";
import axios from "axios";
import { Input } from "antd";

const AxiosPlayground = () => {
  const [todoNum, setTodoNum] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);
  const [reTryCount, setRetryCount] = useState(1);
  const [newTaskName, setNewTaskName] = useState("");
  const handleChange = (e) => {
    setNewTaskName(e.target.value);
  };

  const handlePressEnter = () => {
    if (newTaskName === "") {
      return;
    }

    const postData = async () => {
      try {
        const postTask = await axios.post(
          "https://linhtrinhviet.herokuapp.com/todo",
          {
            task: newTaskName,
          }
        );

        setRetryCount(reTryCount + 1);
      } catch (err) {
        console.log("post loi roi");
      }
    };

    postData();
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const todoList = await axios.get(
          "https://linhtrinhviet.herokuapp.com/todo"
        );
        setTodoNum(todoList.data);
      } catch (error) {
        console.log("loi roi");
        setIsErr(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [reTryCount]);

  return isLoading ? (
    "Loading..."
  ) : (
    <>
      {!isErr ? (
        <>
          <div>Tổng số task: {todoNum.length}</div>
          <Input
            placeholder="Add new task"
            onChange={handleChange}
            onPressEnter={handlePressEnter}
          />
        </>
      ) : (
        <button onClick={() => setRetryCount(reTryCount + 1)}>Try again</button>
      )}
    </>
  );
};

export default AxiosPlayground;
