import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionDescription } from '../../../components/SectionDescription';
import { styled } from 'styled-components';
import { Menu } from '../../../components/menu/Menu';
import { Gallery } from './Gallery';
import galleryImg1 from '../../../assets/img/works/1.jpg';
import galleryImg2 from '../../../assets/img/works/2.jpg';
import galleryImg3 from '../../../assets/img/works/3.jpg';
import galleryImg4 from '../../../assets/img/works/4.jpg';
import galleryImg5 from '../../../assets/img/works/5.jpg';
import galleryImg6 from '../../../assets/img/works/6.jpg';
import galleryImg7 from '../../../assets/img/works/7.jpg';
import galleryImg8 from '../../../assets/img/works/8.jpg';
import galleryImg9 from '../../../assets/img/works/9.jpg';

const items = ['All', 'Landing page', 'React', 'SPA'];
const galleryImages = [
  galleryImg1,
  galleryImg2,
  galleryImg3,
  galleryImg4,
  galleryImg5,
  galleryImg6,
  galleryImg7,
  galleryImg8,
  galleryImg9,
];

export const Works = () => {
  return (
    <StyledWorks>
      <SectionTitle>portfolio</SectionTitle>
      <SectionDescription>Latest Works</SectionDescription>
      <Menu menuItems={items} />
      <Gallery galleryItems={galleryImages}></Gallery>
    </StyledWorks>
  );
};
const StyledWorks = styled.section`
  min-height: 30vh;
  background-color: #fee6e6;
`;
