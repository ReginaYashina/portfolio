import { styled } from "styled-components";
import line from "../assets/img/line.svg";

export const SectionTitle = styled.h2`
  font-family: "Inconsolata", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 126%;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding-left: 82px;
  margin-bottom: 28px;

  position: relative;

  &:before {
    content: url(${line});

    position: absolute;
    left: 0;
    bottom: 13%;
  }
`;
