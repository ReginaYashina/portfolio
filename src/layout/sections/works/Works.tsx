import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionDescription } from '../../../components/SectionDescription';
import { Container } from '../../../components/Container';
import { Gallery } from './Callery';
import { GalleryMenu } from '../../../components/navigation/galleryMenu/DesktopMenu';
import { S } from './Works_Styles';

const items = ['All', 'Landing page', 'React', 'SPA'];

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle>portfolio</SectionTitle>
        <SectionDescription>Latest Works</SectionDescription>
        <GalleryMenu menuItems={items} />
        <Gallery />
      </Container>
    </S.Works>
  );
};
