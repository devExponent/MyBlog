import { Api } from "../Services/Api";
import Card from "./Card";
import { useState } from "react";

const Post = () => {
  const [updatePost, setUpdatePost] = useState([]);
  const [display, setDisplay] = useState(false);
  const [inputData, setInputData] = useState({
    title: "",
    body: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const AddPost = async (e) => {
    e.preventDefault();
    try {
      const res = await Api.post("", {
        inputData,
      });
      setUpdatePost((prev) => [...prev, inputData]);
      console.log(res.status);
      if (res.status === 200 || res.status === 201) {
        setDisplay(true);
      }
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <p>ddddkm</p>
      <form className="max-w-sm mx-auto my-2" onSubmit={AddPost}>
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
            name="body"
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
      {display &&
        updatePost.map((postItem, index) => (
          <div key={index}>
            <Card title={postItem.title} body={postItem.body} />
          </div>
        ))}
      {/* <Card /> */}
    </div>
  );
};

export default Post;
