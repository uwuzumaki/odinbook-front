import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HeaderBar from "../HeaderBar/HeaderBar";

const Layout = () => {
  return (
    <div>
      <HeaderBar />
      <Outlet />
      <Navigation />
    </div>
  );
};

export default Layout;
