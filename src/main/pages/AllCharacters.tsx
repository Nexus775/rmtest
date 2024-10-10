import {useGetCharacters} from "../hooks/useGetCharacters";
import styled from "styled-components";
import {CharacterCard} from "../components/CharacterCard";
import {useCallback, useEffect, useState} from "react";
import {ISingleCharacter} from "../hooks/useGetSingleCharacter";
import {LoadingElement} from "../components/LoadingElement";
import {Filters} from "../components/Filters";

export const AllCharacters = () => {
  const [page, setPage] = useState<number>(1);
  const [updateFlag, setUpdateFlag] = useState<boolean>(true);
  const [elements, setElements] = useState<ISingleCharacter[]>([]);
  const [filter, setFilter] = useState<string>('');
  
  const data = useGetCharacters(page, filter);
  
  // on filter change, soft reset
  useEffect(() => {
    setPage(1);
    setUpdateFlag(true);
    setElements([]);
  }, [filter]);
  
  useEffect(() => {
    if (!updateFlag) return;
    if (data.results.length === 0 && !data.noResults) return;
    
    setUpdateFlag(false);
    setElements((init) => [...init, ...data.results]);
  }, [data, updateFlag]);
  
  const onShow = useCallback(() => {
    if (updateFlag) return;
    
    setUpdateFlag(true);
    setPage((page) => page + 1);
  }, [updateFlag]);
  
  return (
    <Container>
      <Filters updateFilter={setFilter}/>
      <Elements>
        {data.noResults ? <NoResults>No results found...</NoResults> : undefined}
        {elements.map((character) => <CharacterCard key={character.id} character={character}/>)}
        {filter ? undefined : <LoadingElement onShow={onShow}/>}
      </Elements>
    </Container>
  );
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

const Elements = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	gap: 16px;
`;

const NoResults = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	background-color: #fff;
	padding: 16px;
`;
