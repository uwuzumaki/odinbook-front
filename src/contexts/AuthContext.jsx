import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const loaderData = useLoaderData();
  const [username, setUsername] = useState();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    try {
      setUsername(loaderData.user.username);
      console.log(loaderData);
      loaderData ? setAuthenticated(true) : null;
    } catch (err) {
      console.log(err);
    }
  });

  const value = {
    username,
    setUsername,
    authenticated,
    setAuthenticated,
  };

  return <AuthContext value={value}>{children}</AuthContext>;
};

export { AuthContext, AuthProvider };
