import { useState, useEffect } from "react";
import { Api } from "./Services/Api";

import "./App.css";

function App() {
  const [user, setUser] = useState([]);
  const [handleError, setHandleError] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await Api.get("?_limit=5");

        // console.log(res.data);
        setUser(res.data);
      } catch (err) {
        console.log(err);
        setHandleError("Failed to receive data");
      }
    };
    fetchUser();
  }, []);

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
