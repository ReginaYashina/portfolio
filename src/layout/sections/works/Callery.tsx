import React from 'react'
import { SectionLink } from '../../../components/SectionLink'
import galleryImg1 from '../../../assets/img/works/1.jpg'
import galleryImg2 from '../../../assets/img/works/2.jpg'
import galleryImg3 from '../../../assets/img/works/3.jpg'
import galleryImg4 from '../../../assets/img/works/4.jpg'
import galleryImg5 from '../../../assets/img/works/5.jpg'
import galleryImg6 from '../../../assets/img/works/6.jpg'
import galleryImg7 from '../../../assets/img/works/7.jpg'
import galleryImg8 from '../../../assets/img/works/8.jpg'
import galleryImg9 from '../../../assets/img/works/9.jpg'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { S } from './Works_Styles'

export const Gallery: React.FC = () => {
  return (
    <S.Gallery>
      <FlexWrapper gap={'40px'} wrap={'wrap'} direction={'column'}>
        <S.GalleryItem src={galleryImg1} alt='Gallery Item 1' />
        <S.GalleryItem src={galleryImg4} alt='' />
        <S.GalleryItem src={galleryImg7} alt='' />
        <S.GalleryItem src={galleryImg2} alt='' />
        <S.GalleryItem src={galleryImg5} alt='' />
        <S.GalleryItem src={galleryImg8} alt='' />
        <S.GalleryItem src={galleryImg3} alt='' />
        <S.GalleryItem src={galleryImg6} alt='' />
        <S.GalleryItem src={galleryImg9} alt='' />
      </FlexWrapper>
      <SectionLink href={''}>view all works</SectionLink>
    </S.Gallery>
  )
}
