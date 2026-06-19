import { Link } from "react-router-dom";
import Icon from "../../ui/Icon";

const Navigation = () => {
  return (
    <div className="w-min-[25vw] border-color-amber-50 flex flex-row justify-between border sm:flex-col sm:justify-center">
      <Link className="flex" to="/">
        <Icon icon="iHome" />
        <div className="hidden md:block">Home</div>
      </Link>
      <Link className="flex" to="search">
        <Icon icon="iSearch" />
        <div className="hidden md:block">Search</div>
      </Link>
      <Link className="flex" to="create">
        <Icon icon="iCreate" />
        <div className="hidden md:block">Create</div>
      </Link>
      <Link className="flex" to="likes">
        <Icon icon="iLikes" />
        <div className="hidden md:block">Likes</div>
      </Link>
      <Link className="flex" to="allUsers">
        <Icon icon="iUsers" />
        <div className="hidden md:block">Users</div>
      </Link>
      <Link className="flex" to="u/user">
        <Icon icon="iProfile" />
        <Link className="hidden md:block">Profile</Link>
      </Link>
    </div>
  );
};

export default Navigation;
