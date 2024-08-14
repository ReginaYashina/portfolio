import React from 'react'
import { SectionLink } from '../../../components/SectionLink'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { S } from './Works_Styles'

type GalleryItemsPropsType = {
    GalleryItems: Array< {
        id: number,
        image: string,
        type: string
    }>
}

export const Gallery: React.FC<GalleryItemsPropsType> = ( props:GalleryItemsPropsType) => {
  return (
    <S.Gallery>
      <FlexWrapper gap={'40px'} wrap={'wrap'} direction={'column'}>
          {props.GalleryItems.map((item)=>{
              return(
                  <S.GalleryItem src={item.image} alt='Gallery Item 1' key={item.id}/>
              )
          })}
      </FlexWrapper>
      <SectionLink href={''}>view all works</SectionLink>
    </S.Gallery>
  )
}
