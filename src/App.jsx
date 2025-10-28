import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchUser(), [];
  });

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
