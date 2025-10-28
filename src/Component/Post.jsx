import React from "react";
import Card from "./Card";
import { Api } from "../Services/Api";
import { useState, useEffect } from "react";

const Post = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      try {
        const res = await Api.get("?_limit=15");

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
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {post.map((postItems) => (
          <Card
            key={postItems.id}
            title={postItems.title}
            body={postItems.body}
          />
        ))}
      </div>
    </section>
  );
};

export default Post;
