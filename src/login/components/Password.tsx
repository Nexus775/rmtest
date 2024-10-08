import {ChangeEvent, useCallback, useContext, useState} from "react";
import {FormLabel, TextField} from "@mui/material";
import {LoginElement} from "../styled";
import {LoginContext} from "../context/LoginContext";

export const Password = () => {
  const {setPassword} = useContext(LoginContext);
  
  const [internal, setInternal] = useState<string>("");
  const [isError, setError] = useState<boolean>(false);
  
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const error = e.target.value.length < 6 || e.target.value.length > 20;
    setPassword(error ? "" : e.target.value);
    setInternal(e.target.value);
    setError(error);
  }, [setPassword]);
  
  return (
    <LoginElement>
      <FormLabel>Password</FormLabel>
      <TextField
        type="password"
        placeholder="••••••"
        autoComplete="current-password"
        variant="outlined"
        autoFocus
        required
        fullWidth
        value={internal}
        error={isError}
        color={isError ? 'error' : 'primary'}
        helperText={isError ? "Password must be at least 6 characters long." : " "}
        onChange={onChange}
      />
    </LoginElement>
  );
}