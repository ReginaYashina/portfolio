import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionDescription } from '../../../components/SectionDescription';
import { Container } from '../../../components/Container';
import { Gallery } from './Callery';
import { GalleryMenu } from '../../../components/navigation/galleryMenu/GalleryMenu';
import { S } from './Works_Styles';

const tabsItems: Array<{
  title: string;
  status: 'all' | 'landing' | 'react' | 'spa';
}> = [
  {
    title: 'all',
    status: 'all',
  },
  {
    title: 'Landing page',
    status: 'landing',
  },
  {
    title: 'React',
    status: 'react',
  },
  {
    title: 'SPA',
    status: 'spa',
  },
];

export const Works: React.FC = () => {
  return (
    <S.Works>
      <Container>
        <SectionTitle>portfolio</SectionTitle>
        <SectionDescription>Latest Works</SectionDescription>
        <GalleryMenu tabsItems={tabsItems} />
        <Gallery />
      </Container>
    </S.Works>
  );
};
