import styled from 'styled-components';
import { theme } from '../styles/Theme';
import { font } from '../styles/Common';

export const SectionText = styled.p`
  ${font({
    weight: 300,
    lineHeight: '225%',
    color: theme.colors.secondaryFont,
    Fmax: 19,
    Fmin: 16,
  })}
  letter-spacing: 0.02em;
  margin-left: 60px;
  & + & {
    margin-top: 32px;
    @media ${theme.media.bigTablet} {
      margin-top: 15px;
    }
  }

  @media ${theme.media.bigTablet} {
    margin-top: 15px;
    margin-left: 0;
  }
`;
