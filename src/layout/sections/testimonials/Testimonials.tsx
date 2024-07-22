import React from 'react';
import { styled } from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import image from '../../../assets/img/testimonial-2.jpg';

export const Testimonials = () => {
  return (
    <StyledTestimonials>
      <Testimony>
        <Image src={image} />
        <FlexWrapper direction={'column'}>
          <SectionTitle>testimonials</SectionTitle>
          <Text>
            “Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio
            tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue
            et dolor sit amet, elit consectetur adipiscing.”s
          </Text>
          <Name>Lucas wolfer</Name>
          <Profession>ceo - raisins</Profession>
        </FlexWrapper>
      </Testimony>
    </StyledTestimonials>
  );
};

const StyledTestimonials = styled.div`
  min-height: 30vh;
  background-color: #e6fef8;
`;

const Testimony = styled.div`
  display: flex;
`;

const Text = styled.p``;
const Name = styled.span``;
const Profession = styled.span``;
const Image = styled.img`
  width: 671px;
  height: 650px;
`;
