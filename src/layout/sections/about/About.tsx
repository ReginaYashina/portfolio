import React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { SectionDescription } from "../../../components/SectionDescription";
import { SectionText } from "../../../components/SectionText";
import { SectionLink } from "../../../components/SectionLink";
import { Container } from "../../../components/Container";
import { Column } from "../../../components/Column";

export const About = () => {
  return (
    <StyledAbout>
      <Container>
        <FlexWrapper justify={"space-between"} align={"center"}>
          <Column>
            <SectionTitle>who am i</SectionTitle>
            <SectionDescription>
              I'm Art Director & Brand Designer based in Los Angeles, USA.
            </SectionDescription>
          </Column>
          <Column>
            <SectionText>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta explicabo.
            </SectionText>
            <SectionText>
              Itaque earum rerum hic tenetur a sapiente delectus, ut aut
              reiciendis voluptatibus maiores alias consequatur aut perferendis
              doloribus asperiores repellat quia voluptas sit aspernatur te
              natus error sit voluptatem accusan.
            </SectionText>
            <SectionLink href={""}>about me</SectionLink>
          </Column>
        </FlexWrapper>
      </Container>
    </StyledAbout>
  );
};

const StyledAbout = styled.section``;
