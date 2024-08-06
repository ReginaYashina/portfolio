import React from 'react';
import photo from '../../../assets/img/tmp.png';
import { Container } from '../../../components/Container';
import { S } from './Main_Styles';

export const Main: React.FC = () => {
  return (
    <S.Main>
      <S.MainContentWrapper>
        <Container>
          <S.MainContent>
            <S.Greetings>hi! everyone</S.Greetings>
            <S.MainTitle>
              <p>regina yashina </p>
              <p>web developer</p>
            </S.MainTitle>
            <S.Description>
              Make designs mainly logos, visual identities, apps & websites,
              social media and magazines.
            </S.Description>
            <S.MainLink href=''>get in touch</S.MainLink>
          </S.MainContent>
        </Container>
      </S.MainContentWrapper>
      <S.PhotoWrapper>
        <S.Photo src={photo} alt='photo' />
      </S.PhotoWrapper>
    </S.Main>
  );
};
