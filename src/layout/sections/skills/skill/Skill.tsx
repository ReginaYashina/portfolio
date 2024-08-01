import React from 'react';
import { css, styled } from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { FlexWrapper } from '../../../../components/FlexWrapper';

type SkillPropsType = {
  progressTitle?: string;
  percent?: string;
  progress?: string;
};

export const Skill = (props: SkillPropsType) => {
  return (
    <SyledSkill>
      <FlexWrapper justify={'space-between'}>
        <SkillLabel>{props.progressTitle}</SkillLabel>
      </FlexWrapper>
      <SkillProgressWrapper>
        <SkillProgress progress={props.percent}>
          <Percent>{props.percent}</Percent>
        </SkillProgress>
      </SkillProgressWrapper>
    </SyledSkill>
  );
};

const SyledSkill = styled.div`
  & + & {
    margin-top: 30px;
  }
`;

const SkillLabel = styled.div`
  margin-bottom: 11px;
  font-weight: 400;
  font-size: 19px;
  letter-spacing: 0.03em;
  text-transform: capitalize;
  color: ${theme.colors.primaryFont};
`;

const SkillProgressWrapper = styled.div`
  width: 100%;
  height: 4px;
  background-color: #f0f0f0;
  position: relative;
`;

const SkillProgress = styled.div<SkillPropsType>`
  width: ${(props) => props.progress || '100%'};
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-color: ${theme.colors.secondaryFont};
`;

const Percent = styled.span`
  position: absolute;
  right: -15px;
  top: -29px;
`;
