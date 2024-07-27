import { styled } from "styled-components";
import { theme } from "../styles/Theme";

export const SectionLink = styled.a`
  display: inline-block;
  padding: 12px 44px;
  background-color: ${theme.colors.primaryFont};
  margin-top: 64px;

  font-weight: 600;
  font-size: 16px;
  line-height: 235%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  color: ${theme.colors.lightFont};
  border: 1px solid ${theme.colors.primaryFont};

  &:hover {
    background-color: ${theme.colors.lightFont};
    color: ${theme.colors.primaryFont};
    border: 1px solid ${theme.colors.primaryFont};
  }
`;
