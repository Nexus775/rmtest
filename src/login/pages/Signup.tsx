import {Button} from "@mui/material";
import {useCallback, useContext} from "react";
import {signup} from "../../utils";
import {Password} from "../components/Password";
import {Email} from "../components/Email";
import {LoginContainer, LoginTitle} from "../styled";
import {LoginContext} from "../context/LoginContext";

export const Signup = () => {
  const {email, password, setIsFinished, setError} = useContext(LoginContext);
  
  const onAction = useCallback(() => {
    if (!email || !password) return;
    
    signup(email, password)
      .then(() => setIsFinished(true))
      .catch(() => setError("User already exists"));
  }, [email, password, setIsFinished, setError]);
  
  return (
    <LoginContainer onSubmit={(e) => e.preventDefault()}>
      <LoginTitle>Sign Up</LoginTitle>
      <Email/>
      <Password/>
      <Button type="submit" fullWidth variant="contained" onClick={onAction}>
        Sign up
      </Button>
    </LoginContainer>
  );
};