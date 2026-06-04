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
        element: <div>index</div>,
        index: true,
      },
      {
        element: <Profile />,
        path: "profile/:username",
      },
      {
        element: <div>All users</div>,
        path: "allUsers",
      },
      {
        element: <div>Create post</div>,
        path: "createPost",
      },
      { element: <div>post page</div>, path: "p/:postId" },
      { element: <div>Following</div>, path: "following" },
      { element: <div>Followers</div>, path: "followers" },
      { element: <div>Follower Requests</div>, path: "followerRequests" },
    ],
  },
];

export default routes;
