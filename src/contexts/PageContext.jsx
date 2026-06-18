import { createContext, useContext, useState } from "react";

const PageContext = createContext();

const PageProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState();

  const value = {
    pageTitle,
    setPageTitle,
  };

  return <PageContext value={value}>{children}</PageContext>;
};

export { PageContext, PageProvider };
