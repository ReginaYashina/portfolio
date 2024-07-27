import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionDescription } from "../../../components/SectionDescription";
import { SectionText } from "../../../components/SectionText";
import { Skill } from "./skill/Skill";
import { Column } from "../../../components/Column";
import { Container } from "../../../components/Container";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <FlexWrapper justify={"space-between"}>
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
            <Skill
              progressTitle={"design"}
              progressId={"design"}
              value={"90"}
              max={""}
              progressFor={"design"}
              percent={"90"}
            />
            <Skill
              progressTitle={"art direction"}
              progressId={"art-direction"}
              value={"95"}
              max={""}
              progressFor={"art-direction"}
              percent={"95"}
            />
            <Skill
              progressTitle={"branding"}
              progressId={"branding"}
              value={"95"}
              max={""}
              progressFor={"branding"}
              percent={"95"}
            />
            <Skill
              progressTitle={"website design"}
              progressId={"website-design"}
              value={"80"}
              max={""}
              progressFor={"website-design"}
              percent={"80"}
            />
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
