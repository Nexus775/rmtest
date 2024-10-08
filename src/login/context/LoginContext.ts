import {createContext} from "react";

export interface ILoginContextType {
  email: string;
  password: string;
  isFinished: boolean;
  error: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setIsFinished: (isFinished: boolean) => void;
  setError: (error: string) => void;
}

export const LoginContext = createContext<ILoginContextType>({} as ILoginContextType);