import {keyframes, styled} from "styled-components";

export const Loading = () => <Loader/>;

const spin = keyframes`
	to {
		transform: rotate(360deg);
	}
`;

const Loader = styled.div`
	display: inline-block;
	width: 80px;
	height: 80px;
	border: 12px solid lightgray;
	border-radius: 50%;
	border-top-color: darkgray;
	animation-name: ${spin};
	animation-duration: 1s;
	animation-iteration-count: infinite;
`;