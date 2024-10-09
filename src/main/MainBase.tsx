import {useMemo} from "react";
import {Navigate, Outlet, useNavigate} from "react-router-dom";
import styled from "styled-components";

export const MainBase = () => {
  const hasUser = useMemo(() => localStorage.getItem("token"), []);
  
  const navigate = useNavigate();
  
  return hasUser ? <Container>
    <Header>
      <HeaderElement onClick={() => navigate("/main/characters")}>Characters</HeaderElement>
      <HeaderElement onClick={() => navigate("/login/logout")}>Logout</HeaderElement>
    </Header>
    <Content id="maincontent">
      <Outlet/>
    </Content>
  </Container> : <Navigate to="/login/logout"/>;
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	overflow-y: hidden;

	& > * {
		padding: 16px;
	}
`;

const Header = styled.div`
	display: flex;
	background-color: lightblue;
	gap: 16px;
`;

const HeaderElement = styled.div`
	padding: 8px;
	background-color: lightgreen;
	cursor: pointer;
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	min-height: calc(100% - 66px);
	overflow-y: scroll;
	overflow-x: hidden;
	background-color: #ddd;
`;