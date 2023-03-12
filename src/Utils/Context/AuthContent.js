import React, { useContext, useState, useEffect } from "react";
const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(false);
  const [appLoader, setAppLoader] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

  
  const getUser = () => {
    fetch("http://localhost:5000/auth/login/success", {
      method: "GET",
      credentials: "include",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": 'true',
      },
    })
      .then((response) => {
        if (response.status === 200) return response.json();
        throw new Error("authentication has been failed!");
      })
      .then((resObject) => {
        setUser(resObject.user._json);
        console.log(resObject);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

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
        isLogin,user,setIsLogin,
        LoginEvent,setUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
