import {LoginBackground} from "./styled";
import {Navigate, Outlet} from "react-router-dom";
import React, {useState} from "react";
import {LoginContext} from "./context/LoginContext";

export const LoginBase = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isFinished, setIsFinished] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  
  return (
    <LoginBackground>
      <LoginContext.Provider value={{
        email,
        password,
        isFinished,
        error,
        setEmail,
        setPassword,
        setIsFinished,
        setError
      }}>
        <Outlet/>
      </LoginContext.Provider>
      {isFinished ? <Navigate to="/main/characters"/> : undefined}
    </LoginBackground>
  );
};
