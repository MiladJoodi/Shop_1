import React, { useCallback, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import AuthContext from "./context/authContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = useState(false);

  const router = useRoutes(routes);

  const login = useCallback((userInfos, token) => {
    setToken(token);
    setIsLoggedIn(true);
    setUserInfos(userInfos);

    localStorage.setItem("user", JSON.stringify({ token }));
  }, [])

  const logout = useCallback(()=>{
      setToken(null);
      setUserInfos(null);
      localStorage.removeItem("user");
  })

  useEffect(()=>{
    const localStorageData = JSON.parse(localStorage.getItem('user'));
    if(localStorageData){
      fetch('http://localhost:4000/v1/auth/me', {
       method: 'GET',
       headers: {
          'Authorization' : `Bearer ${localStorageData.token}`
       },
      }).then((res)=> res.json())
      .then(userData=>{
        setIsLoggedIn(true)
        setUserInfos(userData)
      })
    }
  },[login])

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        token: token,
        userInfos: userInfos,
        login,
        logout,
      }}
    >
      {router}
    </AuthContext.Provider>
  );
}

export default App;
