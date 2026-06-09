import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HeaderBar from "../HeaderBar/HeaderBar";

const Layout = () => {
  return (
    <>
      <HeaderBar />
      <div className="flex flex-1 flex-col-reverse sm:flex-row">
        <Navigation />
        <div className="mx-auto max-w-7xl flex-1 sm:mx-0">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
