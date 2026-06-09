import Index from "./Components/Index/Index";
import Layout from "./Components/Layout/Layout";
import Profile from "./Components/Profile/Profile";

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
      { element: <div>search</div>, path: "search" },
      { element: <div>create</div>, path: "create" },
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
