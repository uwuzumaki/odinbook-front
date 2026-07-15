// Displays all posts (potentially limited to 7 days)
import { useEffect, use, useState } from "react";
import Card from "../../ui/Card";
import { PageContext } from "../../contexts/PageContext";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";

const Index = () => {
  const title = use(PageContext);
  const auth = use(AuthContext);
  const [posts, setPosts] = useState([]);
  const url = `${import.meta.env.VITE_DEV_URL}/user/index`;

  const getPosts = async () => {
    try {
      const res = await axios.get(url, { withCredentials: true });
      console.log(res.data);
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    title.setPageTitle("Home");
    getPosts();
  }, []);

  return (
    <>
      {posts.map((post) => (
        <>
          <Card key={post.id} post={post} />
        </>
      ))}
    </>
  );
};

export default Index;
