import React from "react";
import { styled } from "styled-components";
import { theme } from "../../../../styles/Theme";
import { FlexWrapper } from "../../../../components/FlexWrapper";

type SkillPropsType = {
  progressTitle: string;
  progressId: string;
  value: string;
  max: string;
  progressFor: string;
  percent: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <SyledSkill>
      <FlexWrapper justify={"space-between"}>
        <SkillLabel htmlFor={props.progressFor}>
          {props.progressTitle}
        </SkillLabel>
        <Percent>{props.percent}%</Percent>
      </FlexWrapper>
      <SkillProgress
        id={props.progressId}
        value={props.value || "0"}
        max={props.max || "100"}
      ></SkillProgress>
    </SyledSkill>
  );
};

const SyledSkill = styled.div`
  & + & {
    margin-top: 30px;
  }
`;

const Percent = styled.span`
  margin-bottom: 11px;
  font-weight: 400;
  font-size: 19px;
  letter-spacing: 0.03em;
  color: ${theme.colors.primaryFont};
`;
const SkillLabel = styled.label`
  margin-bottom: 11px;
  font-weight: 400;
  font-size: 19px;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  color: ${theme.colors.primaryFont};
  display: block;
`;
const SkillProgress = styled.progress`
  width: 100%;
  display: block;
  height: 4px;
  overflow: hidden;
  background: #f0f0f0;

  &::-moz-progress-bar {
    background: ${theme.colors.primaryFont};
  }
  &::-webkit-progress-bar {
    background: #f0f0f0;
  }
  &::-webkit-progress-value {
    background: ${theme.colors.primaryFont};
  }
`;
