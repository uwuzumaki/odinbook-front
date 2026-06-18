import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HeaderBar from "../HeaderBar/HeaderBar";

import { PageProvider } from "../../contexts/PageContext";

const Layout = () => {
  return (
    <>
      <div className="flex flex-1 flex-col-reverse justify-center sm:flex-row">
        <Navigation />
        <div className="flex max-w-7xl flex-1 flex-col items-center sm:mx-0 sm:max-w-146">
          <div className="mb-1 w-full min-w-90 overflow-hidden">
            <PageProvider>
              <HeaderBar />
              <Outlet />
            </PageProvider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
