import NavLink from "../../ui/NavLink";
import Icon from "../../ui/Icon";
import {
  CreateIcon,
  HomeIcon,
  LikeIcon,
  SearchIcon,
  UserIcon,
} from "../../ui/Icons";

const Navigation = () => {
  return (
    <div className="w-min-[25vw] flex flex-row justify-between pt-4 sm:mx-auto sm:flex-col sm:items-start sm:justify-start">
      <NavLink location="/">
        <HomeIcon />
        <div className="hidden md:block">Home</div>
      </NavLink>
      <NavLink to="search">
        <SearchIcon />
        <div className="hidden md:block">Search</div>
      </NavLink>
      <NavLink to="create">
        <CreateIcon />
        <div className="hidden md:block">Create</div>
      </NavLink>
      <NavLink to="likes">
        <LikeIcon />
        <div className="hidden md:block">Likes</div>
      </NavLink>
      <NavLink to="allUsers">
        <UserIcon />
        <div className="hidden md:block">Users</div>
      </NavLink>
      <NavLink to="u/user">
        {/* <Icon icon="iProfile" /> */}
        <div className="hidden md:block">Profile</div>
      </NavLink>
    </div>
  );
};

export default Navigation;
