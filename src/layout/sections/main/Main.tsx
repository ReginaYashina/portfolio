import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import photo from '../../../assets/img/testimonial-1.jpg';
import { Column } from '../../../components/Column';
import { Container } from '../../../components/Container';

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <Column>
          <Greetings>hi! everyone</Greetings>
          <MainTitle>regina yashina a web developer</MainTitle>
          <Description>
            Make designs mainly logos, visual identities, apps & websites,
            social media and magazines.
          </Description>
          <MainLink href=''>get in touch</MainLink>
        </Column>
        <Photo src={photo} alt='photo' />
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  position: relative;
  padding: 0;

  ${Container} {
    min-height: 936px;
    display: flex;
    align-items: center;
  }
`;

const Greetings = styled.p``;
const MainTitle = styled.h1``;
const Description = styled.p``;
const MainLink = styled.a``;
const Photo = styled.img`
  width: 49%;
  object-fit: cover;

  position: absolute;
  top: 0;
  right: 0;
`;
