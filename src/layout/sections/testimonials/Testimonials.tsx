import React from 'react';
import { styled } from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import image from '../../../assets/img/testimonial-2.jpg';
import { Container } from '../../../components/Container';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

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

        <Dots>
          <Dot className={'active'}></Dot>
          <Dot></Dot>
          <Dot></Dot>
        </Dots>
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

    @media ${theme.media.tablet} {
      position: relative;
      transform: translate(0);
      top: 0;
      left: 0;
      padding: 0 15px;
      justify-content: start;
    }
  }

  @media ${theme.media.tablet} {
    padding: 80px 0;
  }
`;

const TestimonyContent = styled.div`
  flex: 0 0 59%;
  @media ${theme.media.tablet} {
    flex: 0 0 100%;
  }
  /* padding: 15px 15px 15px 140px; */
`;

const ImageWrapper = styled.div`
  flex: 0 0 39%;
  padding-bottom: 37%;
  position: relative;
  @media ${theme.media.bigTablet} {
    padding-bottom: 50%;
  }
  @media ${theme.media.tablet} {
    display: none;
  }
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
  ${font({
    weight: 400,
    lineHeight: '183%',
    Fmax: 29,
    Fmin: 19,
  })}
  letter-spacing: 0.01em;
  margin-bottom: 24px;
  @media ${theme.media.bigTablet} {
    line-height: 1.4;
  }
`;
const Name = styled.p`
  ${font({
    weight: 600,
    lineHeight: '225%',
    Fmax: 21,
    Fmin: 16,
  })}
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

const Dots = styled.div`
  position: absolute;
  height: 50px;
  display: flex;
  align-items: center;
  gap: 15px;
  right: 0;
  bottom: 0;
  cursor: pointer;

  @media ${theme.media.tablet} {
    right: 15px;
    bottom: -70px;
  }
`;

const Dot = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${theme.colors.mainBtnBg};

  transition: all ease 0.3s;

  &.active {
    background-color: ${theme.colors.lightFont};
    border: 1px solid ${theme.colors.mainBtnBg};
    transform: scale(1.1);
  }

  &:hover {
    transform: scale(0.9);
  }

  @media ${theme.media.bigTablet} {
    width: 20px;
    height: 20px;
  }
`;
