import {PropsWithChildren, useMemo} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";

export const LocationLink = ({target, text}: PropsWithChildren<{ target: string, text: string }>) => {
  const navigate = useNavigate();
  
  const updatedText = useMemo(() => !text || text === "unknown" ? "Unknown" : text, [text]);
  
  const exists = useMemo(() => updatedText !== "Unknown", [updatedText])
  
  return exists ? (
    <Link onClick={() => navigate(target)}>{updatedText}</Link>
  ) : (
    <Linkless>{updatedText}</Linkless>
  );
}

const Link = styled.span`
	cursor: pointer;
	color: blue;
	text-decoration: underline;
`;

const Linkless = styled.span`

`;