import React from "react";
import { styled } from "styled-components";
import { theme } from "../../styles/Theme";
import { font } from "../../styles/Common";

type MenuPropsType = {
  menuItems: Array<string>;
};

export const Menu = (props: MenuPropsType) => {
  return (
    <StyledNav>
      <ul role='menu'>
        {props.menuItems.map((item: string, index: number) => {
          return (
            <li key={index} role='menuitem'>
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

  a {
    ${font({
      family: '"Inconsolata", sans-serif',
      weight: 400,
      lineHeight: "126%",
      color: theme.colors.secondaryFont,
      Fmax: 16,
      Fmin: 14,
    })}
    letter-spacing: 0.2em;
    text-transform: uppercase;

    position: relative;

    &:before {
      content: "";
      height: 1px;
      width: 0;
      background-color: ${theme.colors.secondaryFont};

      position: absolute;
      left: 0;
      bottom: -4px;

      transition: all ease 0.4s;
    }
    &:hover {
      &:before {
        content: "";
        width: 100%;
      }
    }
  }

  @media ${theme.media.bigTablet} {
    display: none;
  }
`;
