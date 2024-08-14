import React, {useState} from 'react';
import {SectionTitle} from '../../../components/SectionTitle';
import {SectionDescription} from '../../../components/SectionDescription';
import {Container} from '../../../components/Container';
import {Gallery} from './Callery';
import {GalleryMenu} from '../../../components/navigation/galleryMenu/GalleryMenu';
import {S} from './Works_Styles';
import galleryImg1 from "../../../assets/img/works/1.jpg";
import galleryImg4 from "../../../assets/img/works/4.jpg";
import galleryImg7 from "../../../assets/img/works/7.jpg";
import galleryImg2 from "../../../assets/img/works/2.jpg";
import galleryImg5 from "../../../assets/img/works/5.jpg";
import galleryImg8 from "../../../assets/img/works/8.jpg";
import galleryImg3 from "../../../assets/img/works/3.jpg";
import galleryImg6 from "../../../assets/img/works/6.jpg";
import galleryImg9 from "../../../assets/img/works/9.jpg";

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

const GalleryItems: Array<{
    id: number,
    image: string,
    type: string
}> = [
    {
        image: galleryImg1,
        type: "landing",
        id: 1
    },
    {
        image: galleryImg4,
        type: "landing",
        id: 2
    },
    {
        image: galleryImg7,
        type: "landing",
        id: 3
    },
    {
        image: galleryImg2,
        type: "react",
        id: 4
    },
    {
        image: galleryImg5,
        type: "react",
        id: 5
    },
    {
        image: galleryImg8,
        type: "react",
        id: 6
    },
    {
        image: galleryImg3,
        type: "spa",
        id: 7
    },
    {
        image: galleryImg6,
        type: "spa",
        id: 8
    },
    {
        image: galleryImg9,
        type: "spa",
        id: 9
    }
]

export const Works: React.FC = () => {
    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = GalleryItems
    if (currentFilterStatus === "landing") {
        filteredWorks = GalleryItems.filter(work => work.type === "landing")
    }
    if (currentFilterStatus === "spa") {
        filteredWorks = GalleryItems.filter(work => work.type === "spa")
    }
    if (currentFilterStatus === "react") {
        filteredWorks = GalleryItems.filter(work => work.type === "react")
    }

    function changeFilterStatus(value: 'all' | 'landing' | 'react' | 'spa') {
        setCurrentFilterStatus(value)
    }

    return (
        <S.Works>
            <Container>
                <SectionTitle>portfolio</SectionTitle>
                <SectionDescription>Latest Works</SectionDescription>
                <GalleryMenu changeFilterStatus={changeFilterStatus} tabsItems={tabsItems}/>
                <Gallery GalleryItems={filteredWorks}/>
            </Container>
        </S.Works>
    );
};
