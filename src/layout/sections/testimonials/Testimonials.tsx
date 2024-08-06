import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import image from '../../../assets/img/testimonial-2.jpg';
import { Container } from '../../../components/Container';
import { S } from './Testimonials_Styles';

export const Testimonials: React.FC = () => {
  return (
    <S.Testimonials>
      <S.ImageWrapper>
        <S.Image src={image} alt='Lucas Wolfers photo' />
      </S.ImageWrapper>
      <Container>
        <S.TestimonyContent>
          <SectionTitle>testimonials</SectionTitle>
          <S.Text>
            “Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio
            tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue
            et dolor sit amet, elit consectetur adipiscing.”
          </S.Text>
          <S.Name>Lucas wolfer</S.Name>
          <S.Profession>ceo - raisins</S.Profession>
        </S.TestimonyContent>

        <S.Dots>
          <S.Dot className={'active'}></S.Dot>
          <S.Dot></S.Dot>
          <S.Dot></S.Dot>
        </S.Dots>
      </Container>
    </S.Testimonials>
  );
};
