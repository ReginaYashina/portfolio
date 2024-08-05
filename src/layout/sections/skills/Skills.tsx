import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { SectionDescription } from '../../../components/SectionDescription';
import { SectionText } from '../../../components/SectionText';
import { Skill } from './skill/Skill';
import { Column } from '../../../components/Column';
import { Container } from '../../../components/Container';

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <FlexWrapper justify={'space-between'} wrap={'wrap'}>
          <Column>
            <SectionTitle>my skills</SectionTitle>
            <SectionDescription>
              Skills that I have so far, to provide my clients best products.
            </SectionDescription>
          </Column>
          <Column>
            <SectionText>
              Accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae.
            </SectionText>
            <Skill progressTitle={'design'} percent={'90%'} />
            <Skill progressTitle={'art direction'} percent={'95%'} />
            <Skill progressTitle={'branding'} percent={'95%'} />
            <Skill progressTitle={'website design'} percent={'80%'} />
          </Column>
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  & ${SectionText} {
    margin-bottom: 45px;
  }
`;
