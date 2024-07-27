import styled from "styled-components";

type ColumnPropsType = {
  width?: string;
};

export const Column = styled.div<ColumnPropsType>`
  width: ${(props) => props.width || "50%"};
`;
