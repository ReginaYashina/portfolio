import { css, styled } from "styled-components";
import { font } from "../../styles/Common";
import { theme } from "../../styles/Theme";
// Gallery Menu
const GalleryMenu = styled.nav`
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

`;
// Desktop Menu
const DesktopMenu = styled.nav`
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

`;
// Mobile Menu
const MobileMenu = styled.nav`

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

export const S = {
  GalleryMenu,
  DesktopMenu,
  MobileMenu,
  BurgerButton,
  MobileMenuWrapper,
}