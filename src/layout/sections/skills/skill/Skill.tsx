import React from 'react';
import { css, styled } from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { font } from '../../../../styles/Common';

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
  margin-left: 60px;
  @media ${theme.media.bigTablet} {
    margin-left: 0;
  }
`;

const SkillLabel = styled.div`
  ${font({
    weight: 400,
    lineHeight: '2.8',
    color: theme.colors.secondaryFont,
    Fmax: 19,
    Fmin: 16,
  })}
  margin-bottom: 11px;
  letter-spacing: 0.03em;
  text-transform: capitalize;
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
  right: -7px;
  top: -40px;
`;
