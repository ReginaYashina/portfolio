import { styled } from 'styled-components';
import { SectionText } from '../../../components/SectionText';
import { theme } from '../../../styles/Theme';
import { font } from '../../../styles/Common';

const Skills = styled.section`
  & ${SectionText} {
    margin-bottom: 18px;
  }
`;
const Skill = styled.div`
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
type SkillPropsType = {
  progressTitle?: string;
  percent?: string;
  progress?: string;
};
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

export const S = {
  Skills,
  Skill,
  SkillLabel,
  SkillProgressWrapper,
  SkillProgress,
  Percent,
};
