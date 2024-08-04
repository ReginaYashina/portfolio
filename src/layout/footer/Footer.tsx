import React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Column } from "../../components/Column";
import { Container } from "../../components/Container";
import decor from "../../assets/img/pattern-bottom.svg";
import { theme } from "../../styles/Theme";
import { FooterMenu } from "./footerMenu/FooterMenu";

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
        <FlexWrapper align={"flex-end"}>
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
  }

  & ${FlexWrapper} {
    padding-bottom: 45px;
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
  cursor: pointer;

  transition: all ease 0.3s;
  &:hover {
    transform: scale(0.98);
  }
  /* TMP!!!!!! */
  display: none;
`;
