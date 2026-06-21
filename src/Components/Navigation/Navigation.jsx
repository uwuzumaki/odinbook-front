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
      <NavLink location="search">
        <SearchIcon />
        <NavText text="Search" />
      </NavLink>
      <NavLink location="create">
        <CreateIcon />
        <NavText text="Create" />
      </NavLink>
      <NavLink location="likes">
        <LikeIcon />
        <NavText text="Likes" />
      </NavLink>
      <NavLink location="allUsers">
        <UserIcon />
        <NavText text="Users" />
      </NavLink>
      <NavLink location="u/user">
        <Icon icon="p" />
        <NavText text="Profile" />
      </NavLink>
    </div>
  );
};

export default Navigation;
