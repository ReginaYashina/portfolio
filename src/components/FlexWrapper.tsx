import styled from "styled-components";

type FlexWrapperPropsType = {
  justify?: string;
  align?: string;
  wrap?: string;
  direction?: string;
  basis?: string;
  gap?: string;
};

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
  display: flex;
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "stretch"};
  flex-wrap: ${(props) => props.wrap || "nowrap"};
  flex-direction: ${(props) => props.direction || "row"};
  flex-basis: ${(props) => props.basis || "50%"};
  gap: ${(props) => props.gap || "0"};
`;
