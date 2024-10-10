import styled from "styled-components";
import {ISingleCharacter} from "./hooks/useGetSingleCharacter";

export const CharacterContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: calc(20% - 16px);
	height: auto;
	background-color: #fff;
	padding: 16px;
	gap: 8px;

	@media screen and (max-width: 1080px) {
		width: calc(33% - 16px);
	}

	@media screen and (max-width: 768px) {
		width: calc(50% - 16px);
	}
`;

export const SingleContainer = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	width: 100%;
	background-color: #fff;
	padding: 16px 32px;
	gap: 16px;
`;

export const CharacterStatus = styled.span<{ $status: ISingleCharacter["status"] }>`
	color: ${({$status}) => $status === "Alive" ? "green" : $status === "Dead" ? "red" : "gray"};
	font-weight: bold;

	&::before {
		content: ${({$status}) => `"${$status}"`};
	}
`;

export const CharacterGender = styled.span<{ $gender: ISingleCharacter["gender"] }>`
	color: ${({$gender}) => $gender === "Male" ? "blue" : $gender === "Female" ? "deeppink" : "gray"};
	font-weight: bold;

	&::before {
		content: ${({$gender}) => `"${$gender}"`};
	}
`;