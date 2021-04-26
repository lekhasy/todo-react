import { Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

export default function AxiosPlayground() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [retryCount, setRetryCount] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const todoListResonse = await axios.get(
          "http://localhost:5000/Todo/GetTodos",
          {
            params: {
              user: "sylk",
            },
          }
        );

        setTodos(todoListResonse.data.data);
      } catch (ex) {
        setIsError(true);
        console.log("lỗi rồi");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [retryCount]);

  const handleTryAgain = () => {
    setRetryCount(retryCount + 1);
  };

  return isLoading ? (
    "Loading ..."
  ) : (
    <>
      {!isError ? (
        <div>{todos.length}</div>
      ) : (
        <div>
          <Button onClick={handleTryAgain}>Try again</Button>
        </div>
      )}
    </>
  );
}
