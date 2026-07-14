import axios from "axios";
import { redirect } from "react-router-dom";

const authLoader = async () => {
  const url = `${import.meta.env.VITE_DEV_URL}/auth/verify`;
  try {
    const res = await axios.get(url, { withCredentials: true });
    const user = res.data.user;
    return { user };
  } catch (err) {
    console.log(err);
    return redirect("/login");
  }
};

export default authLoader;
