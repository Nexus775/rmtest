import {Navigate} from "react-router-dom";
import {useMemo} from "react";

export const Root = () => {
  const hasUser = useMemo(() => !!localStorage.getItem("token"), []);
  return hasUser ? <Navigate to="/main/characters"/> : <Navigate to="/login/logout"/>
}