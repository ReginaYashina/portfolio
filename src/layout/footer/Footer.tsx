import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Column } from '../../components/Column';
import { Container } from '../../components/Container';
import decor from '../../assets/img/pattern-bottom.svg';
import { theme } from '../../styles/Theme';
import { FooterMenu } from './footerMenu/FooterMenu';
import { font } from '../../styles/Common';

// const socialLinks = ["Facebook", "Twitter", "LinkedIn", "Youtube"];

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Column>
          <FooterTitle>
            Wanna <br />
            be starting something ?
          </FooterTitle>
          <FooterText>
            Just feel free to contact if you wanna collaborate with me, or
            simply have a conversation.
          </FooterText>
          {/* <FooterMenu menuItems={socialLinks} /> */}
          <FooterMenu />
        </Column>
        <FlexWrapper align={'flex-end'} justify={'flex-end'}>
          <Mail>Creatify@gmail.com</Mail>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
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
  margin: 26px 0 81px;
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
  &:hover {
    transform: scale(0.98);
  }
`;
