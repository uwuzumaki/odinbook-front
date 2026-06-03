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
    element: <div>layout</div>,
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
