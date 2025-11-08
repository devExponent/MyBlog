import { Api } from "../Services/Api";
import Card from "./Card";
import { useState } from "react";

const Post = () => {
  const [inputData, setInputData] = useState({
    title: "",
    post: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const AddPost = async () => {
    try {
      const res = await Api.post("", {
        title: "",
        body: "",
        // userId: '',
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <p>ddddkm</p>

      <form className="max-w-sm mx-auto">
        <div className="mb-10">
          <label className="block mb-2 font-medium text-2xl">Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded h-15"
            name="title"
            onChange={handleInput}
            required
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 font-medium text-2xl ">Post</label>
          <textarea
            className="w-96 h-40 p-2 border border-gray-300 rounded"
            name="post"
            required
            onChange={handleInput}
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full
           sm:w-auto px-5 py-2.5 text-center"
        >
          Add Post
        </button>
      </form>

      {/* <Card /> */}
    </div>
  );
};

export default Post;
