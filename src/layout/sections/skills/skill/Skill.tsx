import React from 'react';
import { FlexWrapper } from '../../../../components/FlexWrapper';
import { S } from '../Skills_Styles';

type SkillPropsType = {
  progressTitle?: string;
  percent?: string;
  progress?: string;
};

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <FlexWrapper justify={'space-between'}>
        <S.SkillLabel>{props.progressTitle}</S.SkillLabel>
      </FlexWrapper>
      <S.SkillProgressWrapper>
        <S.SkillProgress progress={props.percent}>
          <S.Percent>{props.percent}</S.Percent>
        </S.SkillProgress>
      </S.SkillProgressWrapper>
    </S.Skill>
  );
};
