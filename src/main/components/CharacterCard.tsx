import {ISingleCharacter} from "../hooks/useGetSingleCharacter";
import styled from "styled-components";
import {PropsWithChildren} from "react";
import {CharacterContainer, CharacterStatus} from "../styled";
import {useNavigate} from "react-router-dom";

export const CharacterCard = ({character}: PropsWithChildren<{
  character: ISingleCharacter
}>) => {
  const navigate = useNavigate();
  
  return (
    <CharacterContainer>
      <ImageContainer onClick={() => navigate(`/main/characters/${character.id}`)}><Image src={character.image}/></ImageContainer>
      <Name>{character.name} (<CharacterStatus $status={character.status}/>)</Name>
    </CharacterContainer>
  );
}

const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	padding-top: 100%;
	cursor: pointer;
`;

const Image = styled.img`
	position: absolute;
	top: 0;
	width: 100%;
`;

const Name = styled.div`
	text-align: center;
`;