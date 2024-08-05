import React from "react";
import { S } from "../Menu_Styles";
import { Menu } from "../menu/Menu";

export const GalleryMenu: React.FC<{ menuItems: Array<string> }> = (props: {
  menuItems: Array<string>;
}) => {
  return (
    <S.GalleryMenu>
      <Menu menuItems={props.menuItems} />
    </S.GalleryMenu>
  );
};
