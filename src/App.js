import React, { useState } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import "./App.css";
import AuthContext from "./context/authContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  const [userInfos, setUserInfos] = useState(false);

  const router = useRoutes(routes);

  const login = (token)=> {
    setToken(token)
    // localStorage.setItem('user', {token: token}) 
    //داخل لوکال استوریج نمیشه آبجکت ذخیره کردن برای همین میذاریم داخل جی سون استرینگی فای
    // localStorage.setItem('user', JSON.stringify({token: token})) 
  // اینجوری مینویسیم
    localStorage.setItem('user', JSON.stringify({token})) 
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        token: token,
        userInfos: userInfos,
        login: () => {},
        logout: () => {},
      }}
    >
      {router}
    </AuthContext.Provider>
  );
}

export default App;
