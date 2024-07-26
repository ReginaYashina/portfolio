import React from 'react';
import { styled } from 'styled-components';
import { theme } from '../../styles/Theme';

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

  a {
    color: ${theme.colors.secondaryFont};
    font-family: 'Inconsolata', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 126%;
    letter-spacing: 0.2em;
    text-transform: uppercase;

    position: relative;

    &:before {
      content: '';
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
        content: '';
        width: 100%;
      }
    }
  }
`;
