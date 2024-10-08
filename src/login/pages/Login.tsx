import {Button, Checkbox, FormControlLabel} from "@mui/material";
import {useCallback, useContext} from "react";
import {signin} from "../../utils";
import {Email} from "../components/Email";
import {Password} from "../components/Password";
import {LoginContainer, LoginTitle} from "../styled";
import styled from "styled-components";
import {LoginContext} from "../context/LoginContext";

export const Login = () => {
  const {email, password, setIsFinished, setError} = useContext(LoginContext);
  
  const action = useCallback(() => {
    if (!email || !password) return;
    
    signin(email, password)
      .then(() => setIsFinished(true))
      .catch(() => setError("Invalid email/password"));
  }, [email, password, setIsFinished, setError]);
  
  return (
    <LoginContainer onSubmit={(e) => e.preventDefault()}>
      <LoginTitle>Sign In</LoginTitle>
      <Email/>
      <Password/>
      <FormControlLabel
        control={<Checkbox value="remember" color="primary"/>}
        label="Remember me"
      />
      <Button type="submit" fullWidth variant="contained" onClick={action}>
        Sign in
      </Button>
      <SignupContainer>
        <Text>Don't have an account?</Text>
        <Link href="/login/new">Sign up</Link>
      </SignupContainer>
    </LoginContainer>
  );
};

const SignupContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: 4px;
`;

const Text = styled.div``;

const Link = styled.a``;