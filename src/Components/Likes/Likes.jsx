import { use, useEffect, useState } from "react";
import Card from "../../ui/Card";
import { PageContext } from "../../contexts/PageContext";
import axios from "axios";

const Likes = () => {
  const title = use(PageContext);
  const [posts, setPosts] = useState([]);
  const url = `${import.meta.env.VITE_DEV_URL}/user/getUserLikes`;

  const getPosts = async () => {
    try {
      const res = await axios.get(url, { withCredentials: true });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    title.setPageTitle("Likes");
    getPosts();
  });

  return <>{posts.length ? <Card /> : <>No likes</>}</>;
};

export default Likes;
