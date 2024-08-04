import React from "react";
import { css, styled } from "styled-components";
import { theme } from "../../styles/Theme";

type MobileMenuPropsType = {
  menuItems: Array<string>;
};

export const MobileMenu: React.FC<MobileMenuPropsType> = (
  props: MobileMenuPropsType
) => {
  return (
    <StyledMobileNav>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>
      <MobileMenuWrapper isOpen={false}>
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

  @media ${theme.media.bigTablet} {
    display: block;
  }
`;

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: absolute;
  width: 32px;
  top: 50%;
  height: 21px;
  right: 15px;
  transform: translateY(-50%);
  z-index: 9999999;

  span {
    display: block;
    width: 32px;
    height: 3px;
    background-color: ${theme.colors.primaryFont};
    position: absolute;
    right: 0;

    &:before {
      content: "";
      display: block;
      width: 27px;
      height: 3px;
      background-color: ${theme.colors.primaryFont};
      position: absolute;
      transform: translateY(-10px);
      right: 0;
    }

    &:after {
      content: "";
      display: block;
      width: 29px;
      height: 3px;
      background-color: ${theme.colors.primaryFont};
      position: absolute;
      transform: translateY(10px);
      right: 0;
    }
  }

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      span {
        background-color: transparent;

        &:before {
          content: "";
          width: 29px;
          transform: rotate(-45deg);
        }

        &:after {
          content: "";
          transform: rotate(45deg);
        }
      }
    `}
`;

const MobileMenuWrapper = styled.div<{ isOpen: boolean }>`
  width: 0;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0px 2px 10px 0px rgba(130, 130, 130, 0.2);
  position: fixed;
  right: 0;
  top: 0;
  bottom: 0;
  ul {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 130px 15px;
    text-align: right;
  }

  a {
    color: ${theme.colors.secondaryFont};
    font-family: "Inconsolata", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 126%;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    font-weight: bold;
  }

  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      width: 320px;
    `}
`;
