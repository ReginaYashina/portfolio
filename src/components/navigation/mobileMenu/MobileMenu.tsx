import React, { useState } from "react";
import { Menu } from "../menu/Menu";
import { S } from "../Menu_Styles";

type MobileMenuPropsType = {
  menuItems: Array<string>;
};

export const MobileMenu: React.FC<MobileMenuPropsType> = (
  props: MobileMenuPropsType
) => {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  const onBurgerBtnClick = () => {
    setmenuIsOpen(!menuIsOpen);
  };
  return (
    <S.MobileMenu>
      <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
        <span></span>
      </S.BurgerButton>
      <S.MobileMenuWrapper
        isOpen={menuIsOpen}
        onClick={() => setmenuIsOpen(false)}
      >
        <Menu menuItems={props.menuItems} />
      </S.MobileMenuWrapper>
    </S.MobileMenu>
  );
};
