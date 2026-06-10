import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HeaderBar from "../HeaderBar/HeaderBar";

const Layout = () => {
  return (
    <>
      <HeaderBar />
      <div className="flex flex-1 flex-col-reverse sm:flex-row">
        <Navigation />
        <div className="flex max-w-7xl flex-1 flex-col items-center sm:mx-0">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
