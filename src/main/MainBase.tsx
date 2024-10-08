import {useMemo} from "react";
import {Navigate, Outlet, useNavigate} from "react-router-dom";
import styled from "styled-components";

export const MainBase = () => {
  const hasUser = useMemo(() => localStorage.getItem("token"), []);
  
  const navigate = useNavigate();
  
  return hasUser ? <>
    <Header>
      <HeaderElement onClick={() => navigate("/main/characters")}>Characters</HeaderElement>
      <HeaderElement onClick={() => navigate("/login/logout")}>Logout</HeaderElement>
    </Header>
    <Outlet/>
  </> : <Navigate to="/login/logout"/>;
};

const Header = styled.div`
	display: flex;
	background-color: lightblue;
	padding: 16px;
	gap: 16px;
`;

const HeaderElement = styled.div`
	padding: 8px;
	background-color: lightgreen;
	cursor: pointer;
`;