import React from 'react';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Column } from '../../components/Column';
import { Container } from '../../components/Container';
import { FooterMenu } from './footerMenu/FooterMenu';
import { S } from './Footer_Styles';

export const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Container>
        <Column>
          <S.FooterTitle>
            Wanna <br />
            be starting something ?
          </S.FooterTitle>
          <S.FooterText>
            Just feel free to contact if you wanna collaborate with me, or
            simply have a conversation.
          </S.FooterText>
          <FooterMenu />
        </Column>
        <FlexWrapper align={'flex-end'} justify={'flex-end'}>
          <S.Mail>Creatify@gmail.com</S.Mail>
        </FlexWrapper>
      </Container>
    </S.Footer>
  );
};
