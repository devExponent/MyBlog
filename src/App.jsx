import { useState, useEffect } from "react";
import { Api } from "./Services/Api";

import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const [handleError, setHandleError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const res = await Api.get("?_limit=5");
        setUser(res.data);
      } catch (err) {
        console.log(err);
        setHandleError("Failed to receive data");
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (handleError) {
    return <p>{handleError}</p>;
  }
  return (
    <>
      <div className="flex gap-5 my-5">
        {user.map((users) => (
          <ul className="flex flex-col" key={users.id}>
            <li>Title: {users.title}</li>
            <li>body: {users.body}</li>
          </ul>
        ))}
      </div>
    </>
  );
}

export default App;
