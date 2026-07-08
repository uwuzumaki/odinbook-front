import Login from "./Components/Login/Login";
import Create from "./Components/Create/Create";
import Index from "./Components/Index/Index";
import Layout from "./Components/Layout/Layout";
import Likes from "./Components/Likes/Likes";
import PostPage from "./Components/PostPage/PostPage";
import Profile from "./Components/Profile/Profile";
import Search from "./Components/Search/Search";
import UserIndex from "./Components/UserIndex/UserIndex";
import Following from "./Components/Following/Following";
import Followers from "./Components/Followers/Followers";
import FollowerRequests from "./Components/FollowerRequests/FollowerRequests";
import Register from "./Components/Register/Register";

const routes = [
  {
    element: <Login />,
    path: "login",
  },
  {
    element: <Register />,
    path: "register",
  },
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <Index />,
        index: true,
      },
      { element: <Search />, path: "search" },
      { element: <Create />, path: "create" },
      { element: <Likes />, path: "likes" },
      {
        element: <Profile />,
        path: "u/:username",
      },
      {
        element: <UserIndex />,
        path: "allUsers",
      },
      { element: <PostPage />, path: "p/:postId" },
      { element: <Following />, path: "u/:username/following" },
      { element: <Followers />, path: "u/:username/followers" },
      { element: <FollowerRequests />, path: "followerRequests" },
    ],
  },
];

export default routes;
