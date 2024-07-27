import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Menu } from "../../components/menu/Menu";
import { Column } from "../../components/Column";
import { Container } from "../../components/Container";
import decor from "../../assets/img/pattern-bottom.svg";
import { theme } from "../../styles/Theme";

const socialLinks = ["Facebook", "Twitter", "LinkedIn", "Youtube"];

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
          <Menu menuItems={socialLinks} />
        </Column>
        <FlexWrapper>
          <Mail>Creatify@gmail.com</Mail>
        </FlexWrapper>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  padding: 166px 0 178px;
  display: flex;
  background-color: #fff;
  background-image: url(${decor});
  background-repeat: no-repeat;

  & ${Container} {
    display: flex;
  }

  & ${FlexWrapper} {
    position: relative;
  }
`;

const FooterTitle = styled.h2`
  font-weight: 600;
  font-size: 90px;
  line-height: 115%;
  letter-spacing: 0.04em;
`;
const FooterText = styled.p`
  margin: 26px 0 81px;
  font-weight: 300;
  font-size: 22px;
  line-height: 225%;
  letter-spacing: 0.02em;
  color: ${theme.colors.secondaryFont};
  padding-right: 50px;
`;
const Mail = styled.a`
  font-weight: 500;
  font-size: 60px;
  line-height: 183%;
  letter-spacing: 0.01em;
  color: ${theme.colors.primaryFont};
  border-bottom: 2px solid ${theme.colors.primaryFont};

  position: absolute;
  bottom: 45px;
`;
