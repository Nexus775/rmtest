import {useContext} from "react";
import {LoginContext} from "../context/LoginContext";
import styled from "styled-components";

export const Error = () => {
  const {error} = useContext(LoginContext);
  
  return <Content>{error}</Content>
};

const Content = styled.div`
	height: 20px;
	text-align: center;
	vertical-align: center;
	color: red;
`;