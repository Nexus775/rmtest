import styled from "styled-components";

export const LoginBackground = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
	background-color: #F5F6FA;
	justify-content: center;
	align-items: center;
`;

export const LoginContainer = styled.form`
	display: flex;
	flex-direction: column;
	width: 450px;
	padding: 32px;
	background-color: #fff;
	border-radius: 8px;
	border: 1px solid #e7e9ef;
	gap: 24px;
`;

export const LoginTitle = styled.h1`
	margin: 0;
`;

export const LoginElement = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-bottom: -20px;
`;