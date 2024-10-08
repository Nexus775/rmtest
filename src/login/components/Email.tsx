import {ChangeEvent, useCallback, useContext, useState} from "react";
import {FormLabel, TextField} from "@mui/material";
import {LoginElement} from "../styled";
import {LoginContext} from "../context/LoginContext";

export const Email = () => {
  const {setEmail} = useContext(LoginContext);
  
  const [internal, setInternal] = useState<string>("");
  const [isError, setError] = useState<boolean>(false);
  
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const error = !e.target.value || !/\S+@\S+\.\S+/.test(e.target.value);
    setEmail(error ? "" : e.target.value);
    setInternal(e.target.value);
    setError(error);
  }, [setEmail]);
  
  return (
    <LoginElement>
      <FormLabel>Email</FormLabel>
      <TextField
        type="email"
        placeholder="your@email.com"
        autoComplete="email"
        variant="outlined"
        autoFocus
        required
        fullWidth
        value={internal}
        error={isError}
        color={isError ? 'error' : 'primary'}
        helperText={isError ? "Please enter a valid email address." : " "}
        onChange={onChange}
        sx={{ariaLabel: 'email'}}
      />
    </LoginElement>
  );
}