import { styled } from "styled-components";
import { Container } from "../../components/Container";

const Header = styled.header`
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 2px 10px 0px rgba(130, 130, 130, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999999;

  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const S = {
  Header,
}