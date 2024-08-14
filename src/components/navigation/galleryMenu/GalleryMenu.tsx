import React from 'react'
import {S} from '../Menu_Styles'
import {styled} from "styled-components";


type GalleryMenuPropsType = {
    tabsItems: Array<{
        title: string
        status: 'all' | 'landing' | 'react' | 'spa'
    }>,
    changeFilterStatus: (value: 'all' | 'landing' | 'react' | 'spa') => void
}


export const GalleryMenu: React.FC<GalleryMenuPropsType> = (props: GalleryMenuPropsType) => {
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
                                <S.Link as={'button'} onClick={() => {
                                    props.changeFilterStatus(item.status)
                                }}>{item.title}</S.Link>
                            </li>
                        )
                    }
                )}
            </ul>
        </S.GalleryMenu>
    )
}

