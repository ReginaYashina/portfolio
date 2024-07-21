import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionDescription } from "../../../components/SectionDescription";
import { SectionText } from "../../../components/SectionText";
import { SectionLink } from "../../../components/SectionLink";
import { Skill } from "./skill/Skill";

export const Skills = () => {
  return (
    <StyledSkills>
      <FlexWrapper justify={"space-between"}>
        <FlexWrapper direction={"column"}>
          <SectionTitle>my skills</SectionTitle>
          <SectionDescription>
            Skills that I have so far, to provide my clients best products.
          </SectionDescription>
        </FlexWrapper>
        <FlexWrapper direction={"column"}>
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
          />
          <Skill
            progressTitle={"art direction"}
            progressId={"art-direction"}
            value={"95"}
            max={""}
            progressFor={"art-direction"}
          />
          <Skill
            progressTitle={"branding"}
            progressId={"branding"}
            value={"95"}
            max={""}
            progressFor={"branding"}
          />
          <Skill
            progressTitle={"website design"}
            progressId={"website-design"}
            value={"80"}
            max={""}
            progressFor={"website-design"}
          />
        </FlexWrapper>
      </FlexWrapper>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  min-height: 20vh;
  background-color: #fbe6fe;
`;
