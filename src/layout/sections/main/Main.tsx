import React from 'react';
import styled from 'styled-components';
import photo from '../../../assets/img/tmp.png';
import { Container } from '../../../components/Container';
import handIcon from '../../../assets/img/hand.svg';
import arrow from '../../../assets/img/arrow.svg';
import decor from '../../../assets/img/pattern.svg';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

export const Main = () => {
  return (
    <StyledMain>
      <MainContentWrapper>
        <Container>
          <MainContent>
            <Greetings>hi! everyone</Greetings>
            <MainTitle>
              <p>regina yashina </p>
              <p>web developer</p>
            </MainTitle>
            <Description>
              Make designs mainly logos, visual identities, apps & websites,
              social media and magazines.
            </Description>
            <MainLink href=''>get in touch</MainLink>
          </MainContent>
        </Container>
      </MainContentWrapper>
      <PhotoWrapper>
        <Photo src={photo} alt='photo' />
      </PhotoWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  padding: 0;
  overflow: hidden;
  background-image: url(${decor});
  background-repeat: no-repeat;

  ${Container} {
    display: flex;
    align-items: center;
  }

  @media ${theme.media.tablet} {
    flex-direction: column;
    padding-bottom: 80px;
  }
`;
const MainContentWrapper = styled.div`
  flex: 0 0 100%;
  display: flex;
  @media ${theme.media.tablet} {
    order: 2;
  }
`;
const MainContent = styled.div`
  width: 50%;
  padding-right: 70px;
  margin-top: 80px;

  @media ${theme.media.tablet} {
    width: 100%;
    padding: 0;
    margin-top: 35px;
  }
`;
const PhotoWrapper = styled.div`
  flex: 0 0 50%;
  transform: translateX(-100%);
  padding-bottom: 49.2%;

  position: relative;

  @media ${theme.media.tablet} {
    flex: 0 0 100%;
    transform: translateX(0);
    padding-bottom: 0;
    order: 1;
  }
`;
const Photo = styled.img`
  max-width: 100%;
  object-fit: cover;

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  @media ${theme.media.tablet} {
    position: relative;
    width: 100%;
  }
`;

const Greetings = styled.p`
  ${font({
    family: '"Inconsolata", sans-serif',
    weight: 400,
    lineHeight: '126%',
    color: '#717171',
    Fmax: 18,
    Fmin: 16,
  })}

  letter-spacing: 0.24em;
  text-transform: uppercase;
  padding-left: 39px;

  position: relative;

  &:before {
    content: url(${handIcon});

    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;
const MainTitle = styled.h1`
  ${font({
    weight: 700,
    lineHeight: '122%',
    Fmax: 74,
    Fmin: 40,
  })}
  margin: 42px 0 31px;
  letter-spacing: -0.02em;
  text-transform: capitalize;

  & p {
    white-space: nowrap;
  }

  @media ${theme.media.tablet} {
    margin: 30px 0 20px;
  }
`;
const Description = styled.p`
  ${font({
    weight: 300,
    lineHeight: '235%',
    color: theme.colors.secondaryFont,
    Fmax: 19,
    Fmin: 16,
  })}
  letter-spacing: 0.02em;
`;
const MainLink = styled.a`
  display: inline-block;
  width: 251px;
  height: 65px;
  border: 2px solid ${theme.colors.mainBtnBorder};
  border-radius: 40px;
  margin-top: 50px;
  padding-left: 37px;
  font-weight: 600;
  font-size: 16px;
  line-height: 235%;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${theme.colors.primaryFont};
  display: flex;
  align-items: center;
  position: relative;
  transition: all 0.5s ease;

  &:before {
    content: '';
    width: 61px;
    height: 61px;
    border-radius: 100%;
    background-color: ${theme.colors.mainBtnBg};
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: center;

    position: absolute;
    top: 0;
    right: 0;

    transition: all 0.5s ease;
  }

  &:hover {
    color: ${theme.colors.lightFont};
    background-color: ${theme.colors.mainBtnBg};
  }

  @media ${theme.media.bigTablet} {
    margin-bottom: 30px;
  }

  @media ${theme.media.tablet} {
    margin-top: 45px;
  }
`;
