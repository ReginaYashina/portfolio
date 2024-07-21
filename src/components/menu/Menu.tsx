import React from "react";
import { styled } from "styled-components";

type MenuPropsType = {
  menuItems: Array<string>;
};

export const Menu = (props: MenuPropsType) => {
  return (
    <StyledNav>
      <ul>
        {props.menuItems.map((item: string, index: number) => {
          return (
            <li key={index}>
              <a href='#'>{item}</a>
            </li>
          );
        })}
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  ul {
    display: flex;
  }

  li + li {
    margin-left: 35px;
  }
`;
