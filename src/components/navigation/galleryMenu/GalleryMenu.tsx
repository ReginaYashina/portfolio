import React from 'react'
import { S } from '../Menu_Styles'

export const GalleryMenu: React.FC<{
  tabsItems: Array<{
    title: string
    status: 'all' | 'landing' | 'react' | 'spa'
  }>
}> = (props: {
  tabsItems: Array<{
    title: string
    status: 'all' | 'landing' | 'react' | 'spa'
  }>
}) => {
  return (
    <S.GalleryMenu>
      <ul>
        {props.tabsItems.map(
          (
            item: {
              title: string
              status: 'all' | 'landing' | 'react' | 'spa'
            },
            index: number
          ) => {
            return (
              <li key={index}>
                <a href='#'>{item.title}</a>
              </li>
            )
          }
        )}
      </ul>
    </S.GalleryMenu>
  )
}
