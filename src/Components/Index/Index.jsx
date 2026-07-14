// Displays all posts (potentially limited to 7 days)
import { useEffect, use } from "react";
import Card from "../../ui/Card";
import { PageContext } from "../../contexts/PageContext";
import { AuthContext } from "../../contexts/AuthContext";
import axios from "axios";

const Index = () => {
  const title = use(PageContext);
  const auth = use(AuthContext);
  const url = `${import.meta.env.VITE_DEV_URL}/user/index`;

  const getPosts = async () => {
    try {
      const res = await axios.get(url, { withCredentials: true });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    title.setPageTitle("Home");
    getPosts();
  });

  return (
    <>
      <Card />
      <Card />
    </>
  );
};

export default Index;
