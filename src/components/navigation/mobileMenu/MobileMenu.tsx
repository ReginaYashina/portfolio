import React from "react";
import { Menu } from "../menu/Menu";
import { S } from "../Menu_Styles";

type MobileMenuPropsType = {
  menuItems: Array<string>;
};

export const MobileMenu: React.FC<MobileMenuPropsType> = (
  props: MobileMenuPropsType
) => {
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={false}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuWrapper isOpen={false}>
        <Menu menuItems={props.menuItems} />
      </S.MobileMenuWrapper>
    </S.MobileMenu>
  );
};
