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
    <div className="w-min-[25vw] flex flex-row justify-between pt-4 sm:flex-col sm:items-start sm:justify-start sm:pr-6 lg:pr-12">
      <NavLink location="/">
        <HomeIcon />
        <div className="hidden lg:block">Home</div>
      </NavLink>
      <NavLink to="search">
        <SearchIcon />
        <div className="hidden lg:block">Search</div>
      </NavLink>
      <NavLink to="create">
        <CreateIcon />
        <div className="hidden lg:block">Create</div>
      </NavLink>
      <NavLink to="likes">
        <LikeIcon />
        <div className="hidden lg:block">Likes</div>
      </NavLink>
      <NavLink to="allUsers">
        <UserIcon />
        <div className="hidden lg:block">Users</div>
      </NavLink>
      <NavLink to="u/user">
        {/* <Icon icon="iProfile" /> */}
        <div className="hidden lg:block">Profile</div>
      </NavLink>
    </div>
  );
};

export default Navigation;
