import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import photo from '../../../assets/img/testimonial-1.jpg';

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper justify={'space-between'} align={'center'}>
        <FlexWrapper direction={'column'} align={'flex-start'}>
          <Greetings>hi! everyone</Greetings>
          <MainTitle>regina yashina a web developer</MainTitle>
          <Description>
            Make designs mainly logos, visual identities, apps & websites,
            social media and magazines.
          </Description>
          <MainLink href=''>get in touch</MainLink>
        </FlexWrapper>
        <Photo src={photo} alt='photo' />
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  min-height: 936px;
`;

const Greetings = styled.p``;
const MainTitle = styled.h1``;
const Description = styled.p``;
const MainLink = styled.a``;
const Photo = styled.img`
  width: 49%;
  object-fit: cover;
`;
