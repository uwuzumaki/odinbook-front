import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="w-min-[25vw] border-color-amber-50 flex flex-row justify-between border sm:flex-col sm:justify-center">
      <Link to="/">Home</Link>
      <Link to="search">Search</Link>
      <Link to="create">Create</Link>
      <Link to="likes">Likes</Link>
      <Link to="allUsers">Users</Link>
      <Link to="u/user">Profile</Link>
    </div>
  );
};

export default Navigation;
