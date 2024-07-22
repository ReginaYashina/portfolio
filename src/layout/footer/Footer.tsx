import React from 'react';
import styled from 'styled-components';
import { FlexWrapper } from '../../components/FlexWrapper';

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper direction={'column'}>
        <FooterTitle>Wanna be starting something ?</FooterTitle>
        <FooterText>
          Just feel free to contact if you wanna collaborate with me, or simply
          have a conversation.
        </FooterText>
        <SocialsList></SocialsList>
      </FlexWrapper>
      <FlexWrapper>
        <Mail>Creatify@gmail.com</Mail>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: flex;
  background-color: #e6e9fe;
  min-height: 30vh;
`;

const FooterTitle = styled.h2``;
const FooterText = styled.p``;
const SocialsList = styled.ul``;
const Mail = styled.a``;
