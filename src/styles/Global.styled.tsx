import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme';

export const GlobalStyle = createGlobalStyle`
*, 
*::before, 
*::after{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
	
body {
  margin: 0;
  font-family: "Manrope", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	color:${theme.colors.primaryFont};
	line-height: 1.2;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a{
	text-decoration: none;
	color: ${theme.colors.lightFont};
}

ul{
	list-style: none;
}

button{
	background-color: unset;
	border: 0;
	color: ${theme.colors.lightFont};
	cursor: pointer;
}

section{
	padding: 160px 0;
}

section:nth-of-type(odd){
	background-color: ${theme.colors.primaryBg};
}

section:nth-of-type(even){
	background-color: ${theme.colors.secondaryBg};
}

@media (prefers-reduced-motion: reduce) {
    animation: none;
  }

`;
