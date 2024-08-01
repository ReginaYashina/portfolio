import React from 'react';
import { styled } from 'styled-components';
import { theme } from '../../styles/Theme';

type MobileMenuPropsType = {
  menuItems: Array<string>;
};

export const MobileMenu = (props: MobileMenuPropsType) => {
  return (
    <StyledMobileNav>
      <BurgerButton>
        <span></span>
      </BurgerButton>
      <MobileMenuWrapper>
        <ul role='menu'>
          {props.menuItems.map((item: string, index: number) => {
            return (
              <li key={index} role='menuitem'>
                <a href='#'>{item}</a>
              </li>
            );
          })}
        </ul>
      </MobileMenuWrapper>
    </StyledMobileNav>
  );
};

const StyledMobileNav = styled.nav`
  display: none;

  @media ${theme.media.tablet} {
    display: block;
  }
`;

const BurgerButton = styled.button`
  position: fixed;
  width: 32px;
  height: 21px;
  /* top: 99px; */
  right: 15px;

  span {
    display: block;
    /* width: 100%; */
    width: 32px;
    height: 3px;
    background-color: ${theme.colors.primaryFont};
    position: absolute;
    right: 0;

    &:before {
      content: '';
      display: block;
      width: 27px;
      height: 3px;
      background-color: ${theme.colors.primaryFont};
      position: absolute;
      transform: translateY(-10px);
      right: 0;
    }

    &:after {
      content: '';
      display: block;
      width: 29px;
      height: 3px;
      background-color: ${theme.colors.primaryFont};
      position: absolute;
      transform: translateY(10px);
      right: 0;
    }
  }
`;

const MobileMenuWrapper = styled.div`
  width: 320px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0px 2px 10px 0px rgba(130, 130, 130, 0.2);
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  ul {
    display: flex;
    flex-direction: column;
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
