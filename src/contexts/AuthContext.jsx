import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState();
  const [authenticated, setAuthenticated] = useState(false);

  return <AuthContext>{children}</AuthContext>;
};

export { AuthContext, AuthProvider };
