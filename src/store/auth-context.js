import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

const calculateExp = (exp) => {
  const current = new Date().getTime();
  const expire = new Date(exp).getTime();
  const remaining = expire - current;
  return remaining;
};

const retrieveStoredToken = () => {
  const token = localStorage.getItem("token");
  const exp = localStorage.getItem("expiration");
  const remaining = calculateExp(exp);

  if (remaining <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    return null;
  }

  return {
    token: token,
    duration: remaining,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  if (tokenData) initialToken = tokenData.token;
  const [token, setToken] = useState(initialToken);
  const userLogged = !!token;

  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };

  const login = (token, expiration) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expiration", expiration);
    let remaining = calculateExp(expiration);
    setTimeout(logout, remaining);
  };

  useEffect(() => {
    if (tokenData) {
      console.log("UseEffect context", tokenData.duration);
      setTimeout(logout, tokenData.duration);
    }
  }, [tokenData]);

  const contextValue = {
    token: token,
    isLoggedIn: userLogged,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
