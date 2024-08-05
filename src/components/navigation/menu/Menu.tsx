import React from "react";

type MenuPropsType = {
  menuItems: Array<string>;
};

export const Menu: React.FC<MenuPropsType> = (props: MenuPropsType) => {
  return (
    <ul role='menu'>
      {props.menuItems.map((item: string, index: number) => {
        return (
          <li key={index} role='menuitem'>
            <a href='#'>{item}</a>
          </li>
        );
      })}
    </ul>
  );
};
