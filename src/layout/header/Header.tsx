import React from 'react';
import styled from 'styled-components';
import { Logo } from '../../components/logo/Logo';
import { Menu } from '../../components/menu/Menu';
import { Container } from '../../components/Container';

const items = [
  'home',
  'who am i',
  'my skills',
  'portfolio',
  'testimonials',
  'contacts',
];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo />
        <Menu menuItems={items} />
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  ${Container} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
