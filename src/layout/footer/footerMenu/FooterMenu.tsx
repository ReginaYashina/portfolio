import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../styles/Theme";
import facebook from "../../../assets/img/facebook.svg";
import twitter from "../../../assets/img/twitter.svg";
import linkedin from "../../../assets/img/linkedin.svg";
import youtube from "../../../assets/img/youtube.svg";

// type FooterMenuPropsType = {
//   menuItems: Array<string>;
// };

// export const FooterMenu = (props: FooterMenuPropsType) => {
//   return (
//     <StyledNav>
//       <ul>
//         {props.menuItems.map((item: string, index: number) => {
//           return (
//             <li key={index}>
//               <a href='#'>{item}</a>
//             </li>
//           );
//         })}
//       </ul>
//     </StyledNav>
//   );
// };

export const FooterMenu = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <a href='#'>Facebook</a>
        </li>
        <li>
          <a href='#'>Twitter</a>
        </li>
        <li>
          <a href='#'>LinkedIn</a>
        </li>
        <li>
          <a href='#'>Youtube</a>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  ul {
    display: flex;
  }

  li {
    padding-left: 30px;
    position: relative;

    &:before {
      content: "";

      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    &:nth-child(1) {
      padding-left: 20px;
      &:before {
        content: url(${facebook});
      }
    }
    &:nth-child(2) {
      &:before {
        content: url(${twitter});
      }
    }
    &:nth-child(3) {
      &:before {
        content: url(${linkedin});
      }
    }
    &:nth-child(4) {
      &:before {
        content: url(${youtube});
      }
    }
  }

  li + li {
    margin-left: 35px;
  }

  a {
    color: ${theme.colors.secondaryFont};
    font-weight: 400;
    font-size: 20px;
    line-height: 225%;
    border-bottom: 1px solid ${theme.colors.secondaryFont};
  }
`;
