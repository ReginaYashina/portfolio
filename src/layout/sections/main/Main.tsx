import React from "react";
import styled from "styled-components";
import photo from "../../../assets/img/tmp.png";
import { Container } from "../../../components/Container";
import handIcon from "../../../assets/img/hand.svg";
import arrow from "../../../assets/img/arrow.svg";
import decor from "../../../assets/img/pattern.svg";
import { theme } from "../../../styles/Theme";

export const Main = () => {
  return (
    <StyledMain>
      <MainContentWrapper>
        <Container>
          <MainContent>
            <Greetings>hi! everyone</Greetings>
            <MainTitle>regina yashina web developer</MainTitle>
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
`;
const MainContentWrapper = styled.div`
  flex: 0 0 100%;
  display: flex;
`;
const MainContent = styled.div`
  width: 50%;
  padding-right: 70px;
`;
const PhotoWrapper = styled.div`
  flex: 0 0 50%;
  transform: translateX(-100%);
  padding-bottom: 49.2%;

  position: relative;
`;
const Photo = styled.img`
  max-width: 100%;
  object-fit: cover;

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Greetings = styled.p`
  font-family: "Inconsolata", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 126%;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: #717171;
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
  margin: 42px 0 31px;
  font-weight: 700;
  font-size: 74px;
  line-height: 122%;
  letter-spacing: -0.02em;
  text-transform: capitalize;
  color: ${theme.colors.primaryFont};
`;
const Description = styled.p`
  font-weight: 300;
  font-size: 19px;
  line-height: 235%;
  letter-spacing: 0.02em;
  color: ${theme.colors.secondaryFont};
`;
const MainLink = styled.a`
  display: inline-block;
  width: 251px;
  height: 65px;
  border: 2px solid #e2e2e2;
  border-radius: 40px;
  margin-top: 74px;
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

  &:before {
    content: "";
    width: 62px;
    height: 62px;
    border-radius: 100%;
    background-color: #131313;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: center;

    position: absolute;
    top: 0;
    right: 0;
  }
`;
