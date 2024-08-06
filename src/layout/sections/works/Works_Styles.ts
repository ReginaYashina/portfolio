import { styled } from 'styled-components';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionLink } from '../../../components/SectionLink';
import { theme } from '../../../styles/Theme';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionDescription } from '../../../components/SectionDescription';

// Gallery
const Gallery = styled.div`
  text-align: center;
  ${FlexWrapper} {
    @media ${theme.media.bigTablet} {
      gap: 10px;
    }

    @media ${theme.media.mobile} {
      flex-wrap: wrap;
      flex-basis: 100%;
    }
  }

  ${SectionLink} {
    margin-top: 84px;
  }
`;
const GalleryItem = styled.img.attrs(({ alt }) => ({
  alt: alt || 'Gallery Item',
}))`
  border-radius: 8px;
  max-width: 100%;
  cursor: pointer;
  transition: all 0.5s ease;
  object-fit: cover;

  &:hover {
    filter: hue-rotate(270deg);
    transform: scale(0.99);
  }
`;
// Works
const Works = styled.section`
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

export const S = {
  Gallery,
  GalleryItem,
  Works,
};
