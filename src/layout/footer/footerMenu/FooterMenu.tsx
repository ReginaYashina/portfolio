import React from 'react';
import { styled } from 'styled-components';
import { theme } from '../../../styles/Theme';
import facebook from '../../../assets/img/facebook.svg';
import twitter from '../../../assets/img/twitter.svg';
import linkedin from '../../../assets/img/linkedin.svg';
import youtube from '../../../assets/img/youtube.svg';

const data = [
  {
    iconSrc: facebook,
    title: 'Facebook',
  },
  {
    iconSrc: twitter,
    title: 'Twitter',
  },
  {
    iconSrc: linkedin,
    title: 'Linkedin',
  },
  {
    iconSrc: youtube,
    title: 'Youtube',
  },
];

export const FooterMenu = () => {
  return (
    <StyledNav>
      <ul>
        {data.map((elem, index) => {
          return (
            <li key={index}>
              <img src={elem.iconSrc} alt='' />
              <a href='#'>{elem.title}</a>
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

  li {
    transition: all ease 0.3s;
    &:hover {
      transform: scale(0.95);
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
  img {
    margin-right: 10px;
  }
`;
