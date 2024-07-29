import React from 'react';
import { styled } from 'styled-components';
import { SectionLink } from '../../../components/SectionLink';
import galleryImg1 from '../../../assets/img/works/1.jpg';
import galleryImg2 from '../../../assets/img/works/2.jpg';
import galleryImg3 from '../../../assets/img/works/3.jpg';
import galleryImg4 from '../../../assets/img/works/4.jpg';
import galleryImg5 from '../../../assets/img/works/5.jpg';
import galleryImg6 from '../../../assets/img/works/6.jpg';
import galleryImg7 from '../../../assets/img/works/7.jpg';
import galleryImg8 from '../../../assets/img/works/8.jpg';
import galleryImg9 from '../../../assets/img/works/9.jpg';
import { FlexWrapper } from '../../../components/FlexWrapper';

export const Gallery = () => {
  return (
    <StyledGallery>
      <FlexWrapper gap={'40px'} justify={'space-around'}>
        <FlexWrapper direction={'column'} gap={'40px'}>
          <GalleryItem src={galleryImg1} alt='Gallery Item 1' />
          <GalleryItem src={galleryImg4} alt='' />
          <GalleryItem src={galleryImg7} alt='' />
        </FlexWrapper>
        <FlexWrapper direction={'column'} gap={'40px'}>
          <GalleryItem src={galleryImg2} alt='' />
          <GalleryItem src={galleryImg5} alt='' />
          <GalleryItem src={galleryImg8} alt='' />
        </FlexWrapper>
        <FlexWrapper direction={'column'} gap={'40px'}>
          <GalleryItem src={galleryImg3} alt='' />
          <GalleryItem src={galleryImg6} alt='' />
          <GalleryItem src={galleryImg9} alt='' />
        </FlexWrapper>
      </FlexWrapper>
      <SectionLink href={''}>view all works</SectionLink>
    </StyledGallery>
  );
};

const StyledGallery = styled.div`
  text-align: center;
`;

const GalleryItem = styled.img.attrs(({ alt }) => ({
  alt: alt || 'Gallery Item',
}))`
  border-radius: 8px;
  max-width: 100%;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    filter: hue-rotate(270deg);
    transform: scale(0.99);
  }
`;
