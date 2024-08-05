import React from "react";
import { Logo } from "../../components/logo/Logo";
import { Container } from "../../components/Container";
import { DesktopMenu } from "../../components/navigation/desktopMenu/DesktopMenu";
import { MobileMenu } from "../../components/navigation/mobileMenu/MobileMenu";
import { S } from "./Header_Styles";

const items = [
  "home",
  "who am i",
  "my skills",
  "portfolio",
  "testimonials",
  "contacts",
];

export const Header: React.FC = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 920;

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <S.Header>
      <Container>
        <Logo />
        {width < breakpoint ? (
          <MobileMenu menuItems={items} />
        ) : (
          <DesktopMenu menuItems={items} />
        )}
      </Container>
    </S.Header>
  );
};
