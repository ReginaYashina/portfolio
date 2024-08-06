import { styled } from 'styled-components';
import { Container } from '../../components/Container';
import { theme } from '../../styles/Theme';
import { font } from '../../styles/Common';
import decor from '../../assets/img/pattern-bottom.svg';
import { FlexWrapper } from '../../components/FlexWrapper';

// Footer
const Footer = styled.footer`
  padding: 166px 0 178px;
  background-color: #fff;
  background-image: url(${decor});
  background-repeat: no-repeat;

  & ${Container} {
    display: flex;
    @media ${theme.media.bigTablet} {
      flex-wrap: wrap;
    }
  }

  & ${FlexWrapper} {
    padding-bottom: 45px;
    @media ${theme.media.bigTablet} {
      flex-basis: 100%;
      padding: 20px 0;
    }
  }

  @media ${theme.media.bigTablet} {
    padding: 80px 0;
  }
`;

const FooterTitle = styled.h2`
  ${font({
    weight: 600,
    lineHeight: '115%',
    Fmax: 90,
    Fmin: 45,
  })}
  letter-spacing: 0.04em;
`;

const FooterText = styled.p`
  ${font({
    weight: 300,
    lineHeight: '225%',
    color: theme.colors.secondaryFont,
    Fmax: 22,
    Fmin: 18,
  })}
  margin: 50px 0 74px;
  letter-spacing: 0.02em;
  padding-right: 50px;

  @media ${theme.media.bigTablet} {
    padding-right: 0;
    margin: 25px 0 50px;
  }
`;

const Mail = styled.a`
  ${font({
    weight: 500,
    lineHeight: '183%',
    color: theme.colors.primaryFont,
    Fmax: 60,
    Fmin: 30,
  })}
  letter-spacing: 0.01em;
  border-bottom: 2px solid ${theme.colors.primaryFont};
  cursor: pointer;
  transition: all ease 0.3s;

  @media ${theme.media.hover} {
    &:hover {
      transform: scale(0.98);
    }
  }
`;

// Footer Menu
const Menu = styled.nav`
  ul {
    display: flex;
  }

  li {
    transition: all ease 0.3s;

    @media ${theme.media.hover} {
      &:hover {
        transform: scale(0.95);
      }
    }
  }

  li + li {
    margin-left: 35px;
    @media ${theme.media.smallDesktop} {
      margin-left: 25px;
    }
  }

  a {
    ${font({
      weight: 400,
      lineHeight: '225%',
      color: theme.colors.secondaryFont,
      Fmax: 20,
      Fmin: 16,
    })}

    @media ${theme.media.mobile} {
      display: inline-block;
      width: 25px;
      height: 25px;
    }
  }
  span {
    border-bottom: 1px solid ${theme.colors.secondaryFont};
    @media ${theme.media.mobile} {
      display: none;
    }
  }
  img {
    margin-right: 10px;

    @media ${theme.media.mobile} {
      margin-right: 0;
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
`;

export const S = {
  Footer,
  FooterTitle,
  FooterText,
  Mail,
  Menu,
};
