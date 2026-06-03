import Layout from "./Components/Layout/Layout";

const routes = [
  {
    element: <div>Login</div>,
    path: "/login",
  },
  {
    element: <div>register</div>,
    path: "/register",
  },
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <div>index</div>,
        index: true,
      },
    ],
  },
];

export default routes;
