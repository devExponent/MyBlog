import React from "react";
import Card from "./Card";
import { Api } from "../Services/Api";
import { useState, useEffect } from "react";

const Post = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const res = await Api.get("?_limit=5");

        setPost(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch post");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPost();
  }, []);

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <section className="w-10/12 mx-auto">
      <div className="flex gap-4">
        {post.map((users) => (
          <div key={users.id}>
            <Card title={users.title} body={users.body} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Post;
