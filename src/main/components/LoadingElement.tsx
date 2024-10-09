import {Loading} from "../../root/Loading";
import {CharacterContainer} from "../styled";
import styled from "styled-components";
import {PropsWithChildren, useEffect, useRef} from "react";

export const LoadingElement = ({onShow}: PropsWithChildren<{ onShow: () => void }>) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) onShow();
      })
    }, {
      root: document.querySelector("#maincontent"),
    });
    
    observer.observe(ref.current!);
    
    return () => observer.disconnect();
  }, [onShow]);
  
  return (
    <CharacterContainer ref={ref}>
      <Centered><Loading/></Centered>
    </CharacterContainer>
  );
}

const Centered = styled.div`
	display: flex;
	position: relative;
	width: 100%;
	padding-top: 100%;
	justify-content: center;
	align-content: center;

	& > * {
		position: absolute;
		top: calc(50% - 40px);
	}
`;