import styled from 'styled-components';
import { font } from '../styles/Common';

export const SectionDescription = styled.h3`
  ${font({
    weight: 700,
    lineHeight: '150%',
    Fmax: 52,
    Fmin: 36,
  })}

  letter-spacing: -0.02em;
`;
