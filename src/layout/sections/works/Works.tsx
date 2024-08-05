import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionDescription } from "../../../components/SectionDescription";
import { styled } from "styled-components";

import { Container } from "../../../components/Container";
import { Gallery } from "./Callery";
import { theme } from "../../../styles/Theme";
import { GalleryMenu } from "../../../components/navigation/galleryMenu/DesktopMenu";

const items = ["All", "Landing page", "React", "SPA"];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>portfolio</SectionTitle>
        <SectionDescription>Latest Works</SectionDescription>
        <GalleryMenu menuItems={items} />
        {/* <Gallery galleryItems={galleryImages}></Gallery> */}
        <Gallery />
      </Container>
    </StyledWorks>
  );
};
const StyledWorks = styled.section`
  ${SectionTitle} {
    margin-left: 37%;
    @media ${theme.media.bigTablet} {
      margin-left: 0;
    }
  }
  ${SectionDescription} {
    margin-left: 37%;
    margin-bottom: 60px;
    @media ${theme.media.bigTablet} {
      margin-left: 0;
      margin-bottom: 30px;
    }
  }
  ul {
    justify-content: center;
    margin-bottom: 62px;
  }
`;
