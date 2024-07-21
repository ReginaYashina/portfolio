import React from "react";
import { styled } from "styled-components";
import { Icon } from "../icon/Icon";

export const Logo = () => {
  return (
    <StyledLink>
      <Icon
        iconId={"logo"}
        width={"147"}
        height={"64"}
        viewBox={"0 0 140 64"}
      />
    </StyledLink>
  );
};

const StyledLink = styled.a``;
