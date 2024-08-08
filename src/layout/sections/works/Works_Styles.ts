import { styled } from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionLink } from '../../../components/SectionLink'
import { theme } from '../../../styles/Theme'
import { SectionTitle } from '../../../components/SectionTitle'
import { SectionDescription } from '../../../components/SectionDescription'

// Gallery
const Gallery = styled.div`
  text-align: center;
  ${FlexWrapper} {
    max-height: 1146px;
    @media ${theme.media.smallDesktop} {
      gap: 10px;
    }
    @media (max-width: 977px) {
      max-height: 1000px;
    }
    @media (max-width: 856px) {
      max-height: 1800px;
    }
    @media (max-width: 661px) {
      max-height: 1500px;
    }
    @media ${theme.media.mobile} {
      max-height: none;
    }
  }

  ${SectionLink} {
    margin-top: 84px;
  }
`
const GalleryItem = styled.img.attrs(({ alt }) => ({
  alt: alt || 'Gallery Item',
}))`
  border-radius: 8px;
  max-width: 33%;
  cursor: pointer;
  transition: all 0.5s ease;
  object-fit: cover;

  @media ${theme.media.hover} {
    &:hover {
      filter: hue-rotate(270deg);
      transform: scale(0.99);
    }
  }

  @media (max-width: 856px) {
    max-width: 48%;
  }
  @media ${theme.media.mobile} {
    max-width: 100%;
  }
`
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

    @media ${theme.media.bigTablet} {
      justify-content: flex-end;
      margin-bottom: 30px;
    }

    li + li {
      @media ${theme.media.mobile} {
        margin-left: 20px;
      }
    }
    a {
      @media ${theme.media.mobile} {
        letter-spacing: 0.1em;
      }
    }
  }
`

export const S = {
  Gallery,
  GalleryItem,
  Works,
}
