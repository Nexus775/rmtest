import {useEffect, useState} from "react";
import {signout} from "../../utils";
import {Navigate} from "react-router-dom";
import {Loading} from "../../root/Loading";

export const Logout = () => {
  const [finished, setFinished] = useState<boolean>(false);
  
  useEffect(() => {
    setTimeout(() => signout().then(() => setFinished(true)), 1000);
  }, []);
  
  return finished ? <Navigate to="/login"/> : <Loading/>;
};