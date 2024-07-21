import React from "react";
import { styled } from "styled-components";

type SkillPropsType = {
  progressTitle: string;
  progressId: string;
  value: string;
  max: string;
  progressFor: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <SyledSkill>
      <SkillLabel htmlFor={props.progressFor}>{props.progressTitle}</SkillLabel>
      <SkillProgress
        id={props.progressId}
        value={props.value || "0"}
        max={props.max || "100"}
      ></SkillProgress>
    </SyledSkill>
  );
};

const SyledSkill = styled.div`
  display: flex;
  flex-direction: column;
`;
const SkillLabel = styled.label``;
const SkillProgress = styled.progress``;
