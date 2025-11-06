import { Api } from "../Services/Api";
import Card from "./Card";

const Post = () => {
  const AddPost = async () => {
    try {
      const res = await Api.post("", {
        title: "dndn",
        body: "fkkfk",
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
      <Card />
      <button onClick={AddPost}>fjjf</button>
    </div>
  );
};

export default Post;
