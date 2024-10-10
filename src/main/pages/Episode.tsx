import {useParams} from "react-router";
import {useGetEpisode} from "../hooks/useGetEpisode";
import {SingleContainer} from "../styled";
import styled from "styled-components";
import {CharacterCard} from "../components/CharacterCard";

export const Episode = () => {
  const {id} = useParams();
  
  const data = useGetEpisode(`${id}`);
  
  return (
    <SingleContainer>
      <Data>Episode Name: <Title>{data?.name}</Title></Data>
      <Data>Episode No.: {data?.episode}</Data>
      <Data>Air Date: {data?.air_date}</Data>
      <Data>Characters: </Data>
      <Characters>
        {data?.characters.map((character) => (
          <CharacterCard key={character.id} character={character}/>
        ))}
      </Characters>
    </SingleContainer>
  );
};

const Title = styled.span`
	font-weight: bold;
`;

const Data = styled.div`

`;

const Characters = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;

	& > * {
		padding: 0;
	}
`;
