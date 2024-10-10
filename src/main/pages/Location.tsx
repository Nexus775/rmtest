import {useParams} from "react-router";
import {useGetLocation} from "../hooks/useGetLocation";
import {SingleContainer} from "../styled";
import styled from "styled-components";
import {CharacterCard} from "../components/CharacterCard";

export const Location = () => {
  const {id} = useParams();
  
  const data = useGetLocation(`${id}`);
  
  return (
    <SingleContainer>
      <Data>Location Name: <Title>{data?.name}</Title></Data>
      <Data>Type: {data?.type}</Data>
      <Data>Dimension: {data?.dimension}</Data>
      <Data>Residents: </Data>
      <Characters>
        {data?.residents.map((character) => (
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
