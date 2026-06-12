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
          <div className="mb-1 w-full min-w-90 sm:max-w-90 sm:min-w-146">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
