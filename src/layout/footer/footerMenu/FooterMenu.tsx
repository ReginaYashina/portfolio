import React from 'react';
import facebook from '../../../assets/img/facebook.svg';
import twitter from '../../../assets/img/twitter.svg';
import linkedin from '../../../assets/img/linkedin.svg';
import youtube from '../../../assets/img/youtube.svg';
import { S } from '../Footer_Styles';

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

export const FooterMenu: React.FC = () => {
  return (
    <S.Menu>
      <ul>
        {data.map((elem, index) => {
          return (
            <li key={index}>
              <a href='#'>
                <img src={elem.iconSrc} alt='' />
                <span>{elem.title}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </S.Menu>
  );
};
