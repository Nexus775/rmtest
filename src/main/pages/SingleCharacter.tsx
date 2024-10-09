import styled from "styled-components";
import {useGetSingleCharacter} from "../hooks/useGetSingleCharacter";
import {useParams} from "react-router";
import {CharacterGender, CharacterStatus} from "../styled";
import {useMemo} from "react";
import {getIdOfData} from "../../utils";
import {useNavigate} from "react-router-dom";

export const SingleCharacter = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  
  const data = useGetSingleCharacter(`${id}`);
  
  const originLink = useMemo(() => `../location/${getIdOfData(data?.origin?.url || "")}`, [data]);
  const locationLink = useMemo(() => `../location/${getIdOfData(data?.location?.url || "")}`, [data]);
  
  return (
    <Container>
      {data ? (
        <>
          <Content>
            <DataContent>
              <Data>Name: <Title>{data?.name || "Unknown"}</Title></Data>
              <Data>Status: <CharacterStatus $status={data?.status || "unknown"}/></Data>
              <Data>Species: {data?.species || "Unknown"}</Data>
              <Data>Gender: <CharacterGender $gender={data?.gender || "unknown"}/></Data>
              {data?.type ? <Data>Type: {data?.type}</Data> : undefined}
              <Data>Origin: <Link onClick={() => navigate(originLink)}>{data?.origin?.name || "Unknown"}</Link></Data>
              <Data>Location: <Link onClick={() => navigate(locationLink)}>{data?.location?.name || "Unknown"}</Link></Data>
            </DataContent>
            <ImageContent>
              <ImageContainer>
                <Image src={data?.image}/>
              </ImageContainer>
            </ImageContent>
          </Content>
          <Separator/>
          <Episodes>
            <Data>Episodes:</Data>
          
          </Episodes>
        </>
      ) : undefined}
    </Container>
  );
};

const Container = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	width: 100%;
	background-color: #fff;
	padding: 16px 32px;
	gap: 16px;
`;

const Content = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	justify-content: space-between;
`;

const Separator = styled.div`
	background-color: #000;
	width: 100%;
	height: 2px;
`

const DataContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

const ImageContent = styled.div`
	width: 50%;
	max-width: 150px;
	max-height: 150px;
	border: 2px solid #000;
	overflow: hidden;
	border-radius: 50%;
`;

const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	padding-top: 100%;
`;

const Image = styled.img`
	position: absolute;
	display: block;
	top: 0;
	left: 0;
	width: 100%;
`;

const Title = styled.span`
	font-weight: bold;
`;

const Data = styled.div`

`;

const Link = styled.span`
	cursor: pointer;
	color: blue;
	text-decoration: underline;
`;

const Episodes = styled.div`

`;