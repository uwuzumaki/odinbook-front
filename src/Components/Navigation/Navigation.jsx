import NavLink from "../../ui/NavLink";
import NavText from "../../ui/NavText";
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
    <div className="w-min-[25vw] flex flex-row justify-around pt-4 sm:flex-col sm:items-start sm:justify-start lg:pr-12">
      <NavLink location="/">
        <HomeIcon />
        <NavText text="Home" />
      </NavLink>
      <NavLink to="search">
        <SearchIcon />
        <NavText text="Search" />
      </NavLink>
      <NavLink to="create">
        <CreateIcon />
        <NavText text="Create" />
      </NavLink>
      <NavLink to="likes">
        <LikeIcon />
        <NavText text="Likes" />
      </NavLink>
      <NavLink to="allUsers">
        <UserIcon />
        <NavText text="Users" />
      </NavLink>
      <NavLink to="u/user">
        <Icon icon="iProfile" />
        <NavText text="Profile" />
      </NavLink>
    </div>
  );
};

export default Navigation;
