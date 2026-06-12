import Create from "./Components/Create";
import Index from "./Components/Index/Index";
import Layout from "./Components/Layout/Layout";
import Profile from "./Components/Profile/Profile";
import Search from "./Components/Search/Search";

const routes = [
  {
    element: <div>Login</div>,
    path: "login",
  },
  {
    element: <div>register</div>,
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
      { element: "likes", path: "likes" },
      {
        element: <Profile />,
        path: "profile/:username",
      },
      {
        element: <div>All users</div>,
        path: "allUsers",
      },
      { element: <div>post page</div>, path: "p/:postId" },
      { element: <div>Following</div>, path: "following" },
      { element: <div>Followers</div>, path: "followers" },
      { element: <div>Follower Requests</div>, path: "followerRequests" },
    ],
  },
];

export default routes;
