import {Button} from "@mui/material";
import {useCallback, useContext} from "react";
import {signup} from "../../utils";
import {Password} from "../components/Password";
import {Email} from "../components/Email";
import {LoginContainer, LoginTitle} from "../styled";
import {LoginContext} from "../context/LoginContext";
import {Error} from "../components/Error";
import styled from "styled-components";

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
      <Error/>
      <Button type="submit" fullWidth variant="contained" onClick={onAction}>
        Sign up
      </Button>
      <Container>
        <Text>Already have an account?</Text>
        <Link href="/login">Login</Link>
      </Container>
    </LoginContainer>
  );
};

const Container = styled.div`
	display: flex;
	justify-content: center;
	gap: 4px;
`;

const Text = styled.div``;

const Link = styled.a``;