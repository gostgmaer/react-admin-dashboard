import React, { useContext, useState, useEffect } from "react";
const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const [appLoader, setAppLoader] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const logOuthandler = () => {
    setIsLogin(!isLogin);
    localStorage.removeItem("user");
  };

  const LoginEvent = () => {
    setLoader(true)
    setIsLogin(!isLogin);
    setLoader(false)
    localStorage.setItem("user", JSON.stringify(isLogin));
  };

  const checkIfLogin = () => {
    const user = localStorage.getItem("user");
    setIsLogin(Boolean(user));
    console.log(isLogin);
  };

  useEffect(() => {
    checkIfLogin();
   
  }, []);

  const updateLoader = () => {
    setLoader(!loader);
  };

  return (
    <AuthContext.Provider
      value={{
        loader,
        updateLoader,
        logOuthandler,
        isLogin,
        LoginEvent,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
