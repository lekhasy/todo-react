import React, { useEffect, useState } from "react";
import axios from "axios";

export const AxiosPlay = () => {
  const [todoNum, setTodoNum] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isErr, setIsErr] = useState(false);
  const [reTryCount, setRetryCount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const todoList = await axios.get(
          "http://192.168.1.161:5000/Todo/GetTodos",
          {
            params: {
              user: "sylk",
            },
          }
        );
        setTodoNum(todoList.data.data);
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
        <div>{todoNum.length}</div>
      ) : (
        <button onClick={() => setRetryCount(reTryCount + 1)}>Try again</button>
      )}
    </>
  );
};
