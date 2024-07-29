import React from 'react';
import { styled } from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import image from '../../../assets/img/testimonial-2.jpg';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';

export const Testimonials = () => {
  return (
    <StyledTestimonials>
      <ImageWrapper>
        <Image src={image} alt='Lucas Wolfers photo' />
      </ImageWrapper>
      <Container>
        <TestimonyContent>
          <SectionTitle>testimonials</SectionTitle>
          <Text>
            “Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio
            tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue
            et dolor sit amet, elit consectetur adipiscing.”
          </Text>
          <Name>Lucas wolfer</Name>
          <Profession>ceo - raisins</Profession>
        </TestimonyContent>
      </Container>
    </StyledTestimonials>
  );
};

const StyledTestimonials = styled.section`
  display: flex;
  padding: 0;
  overflow: hidden;

  position: relative;

  & ${Container} {
    position: absolute;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: end;
    align-items: center;
    padding: 125px 0 137px;
  }
`;

const TestimonyContent = styled.div`
  flex: 0 0 59%;

  /* padding: 15px 15px 15px 140px; */
`;

const ImageWrapper = styled.div`
  flex: 0 0 39%;
  padding-bottom: 37%;
  position: relative;
`;

const Image = styled.img`
  max-width: 100%;
  object-fit: cover;

  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;

const Text = styled.p`
  font-weight: 400;
  font-size: 29px;
  line-height: 183%;
  letter-spacing: 0.01em;
  margin-bottom: 24px;
`;
const Name = styled.p`
  font-weight: 600;
  font-size: 21px;
  line-height: 225%;
  letter-spacing: 0.02em;
  text-transform: capitalize;
`;
const Profession = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 179%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #737373;
`;
