import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionDescription } from "../../../components/SectionDescription";
import { styled } from "styled-components";
import { Menu } from "../../../components/menu/Menu";
// import galleryImg1 from "../../../assets/img/works/1.jpg";
// import galleryImg2 from "../../../assets/img/works/2.jpg";
// import galleryImg3 from "../../../assets/img/works/3.jpg";
// import galleryImg4 from "../../../assets/img/works/4.jpg";
// import galleryImg5 from "../../../assets/img/works/5.jpg";
// import galleryImg6 from "../../../assets/img/works/6.jpg";
// import galleryImg7 from "../../../assets/img/works/7.jpg";
// import galleryImg8 from "../../../assets/img/works/8.jpg";
// import galleryImg9 from "../../../assets/img/works/9.jpg";
import { Container } from "../../../components/Container";
import { Gallery } from "./Callery";

const items = ["All", "Landing page", "React", "SPA"];
// const galleryImages = [
//   galleryImg1,
//   galleryImg2,
//   galleryImg3,
//   galleryImg4,
//   galleryImg5,
//   galleryImg6,
//   galleryImg7,
//   galleryImg8,
//   galleryImg9,
// ];

export const Works = () => {
  return (
    <StyledWorks>
      <Container>
        <SectionTitle>portfolio</SectionTitle>
        <SectionDescription>Latest Works</SectionDescription>
        <Menu menuItems={items} />
        {/* <Gallery galleryItems={galleryImages}></Gallery> */}
        <Gallery />
      </Container>
    </StyledWorks>
  );
};
const StyledWorks = styled.section`
  ${SectionTitle} {
    margin-left: 37%;
  }
  ${SectionDescription} {
    margin-left: 37%;
    margin-bottom: 60px;
  }
  ul {
    justify-content: center;
    margin-bottom: 62px;
  }
`;
