import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HeaderBar from "../HeaderBar/HeaderBar";

import { PageProvider } from "../../contexts/PageContext";
import { AuthProvider } from "../../contexts/AuthContext";

const Layout = () => {
  return (
    <>
      <div className="flex flex-1 flex-col-reverse justify-center bg-white sm:flex-row">
        <AuthProvider>
          <Navigation />
          <div className="flex max-w-7xl flex-1 flex-col items-center border-r border-l border-slate-200 sm:mx-0 sm:max-w-146">
            <div className="mb-1 w-full min-w-90 overflow-hidden">
              <PageProvider>
                <HeaderBar />
                <Outlet />
              </PageProvider>
            </div>
          </div>
        </AuthProvider>
      </div>
    </>
  );
};

export default Layout;
