import {useGetCharacters} from "../hooks/useGetCharacters";
import styled from "styled-components";
import {CharacterCard} from "../components/CharacterCard";
import {useCallback, useEffect, useState} from "react";
import {ISingleCharacter} from "../hooks/useGetSingleCharacter";
import {LoadingElement} from "../components/LoadingElement";

export const Characters = () => {
  const [page, setPage] = useState<number>(1);
  const [nextFlag, setNextFlag] = useState<boolean>(true);
  const [elements, setElements] = useState<ISingleCharacter[]>([]);
  
  const data = useGetCharacters(page);
  
  // hot reload fix that doesn't work very well
  useEffect(() => {
    setPage(1);
    setNextFlag(true);
    setElements([]);
  }, []);
  
  useEffect(() => {
    if (data.length === 0) return;
    
    setNextFlag(false);
    setElements((init) => [...init, ...data]);
  }, [data]);
  
  const onShow = useCallback(() => {
    if (nextFlag) return;
    
    setNextFlag(true);
    setPage((page) => page + 1);
  }, [nextFlag]);
  
  return (
    <Container>
      {elements.map((character) => <CharacterCard key={character.id} character={character}/>)}
      <LoadingElement onShow={onShow}/>
    </Container>
  );
};

const Container = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 16px;
	justify-content: space-between;
`;
