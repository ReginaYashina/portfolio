import { theme } from './Theme';

type FontPropsType = {
  family?: string;
  weight?: number;
  color?: string;
  lineHeight?: string;
  Fmin?: number;
  Fmax?: number;
};

export const font = ({
  family,
  weight,
  color,
  lineHeight,
  Fmin,
  Fmax,
}: FontPropsType) => `
  font-family: ${family || 'Manrope'};
  font-weight: ${weight || 400};
  color:${color || theme.colors.primaryFont};
  line-height:${lineHeight || '1.2'};
	font-size: calc( (100vw - 320px)/(1920 - 320) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`;
