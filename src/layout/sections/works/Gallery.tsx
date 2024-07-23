import React from 'react';
import { styled } from 'styled-components';
import { SectionLink } from '../../../components/SectionLink';

type GalleryPropsType = {
  galleryItems: Array<any>;
};

export const Gallery = (props: GalleryPropsType) => {
  return (
    <StyledGallery>
      {props.galleryItems.map((item: any) => {
        return <GalleryItem src={item} alt='' />;
      })}
      <SectionLink href={''}>view all works</SectionLink>
    </StyledGallery>
  );
};

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const GalleryItem = styled.img``;
