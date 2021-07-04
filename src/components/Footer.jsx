import React from 'react';
import styled from 'styled-components';

import LogoTea from './LogoTea';

import youtube from '../assets/img/social media/youtube.svg';
import facebook from '../assets/img/social media/facebook.svg';
import vk from '../assets/img/social media/vk.svg';
import telegram from '../assets/img/social media/paper-plane.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoFooter = styled.div`
  padding-bottom: 130px;
`;

const InfoTea = styled.div``;

const Client = styled.div``;

const Social = styled.div``;

const HeaderTitle = styled.div`
  font-weight: 300;
  font-size: 25px;
  line-height: 29px;
  text-transform: uppercase;
  margin-bottom: 50px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 42px;

  img {
    height: 50px;
  }
`;

function Footer() {
  return (
    <Container>
      <LogoFooter>
        <LogoTea />
      </LogoFooter>
      <InfoTea>
        <HeaderTitle>Интересное о чае</HeaderTitle>
        <ul>
          <li>Информация о чае </li>
          <li>Рецепты Вкусного чая</li>
          <li>Как правильно заваривать?</li>
        </ul>
      </InfoTea>
      <Client>
        <HeaderTitle>Клиентам</HeaderTitle>
        <ul>
          <li>О компании</li>
          <li>Юридическим лицам</li>
          <li>Контакты</li>
        </ul>
      </Client>
      <Social>
        <HeaderTitle>Мы в социальных сетях</HeaderTitle>
        <Icons>
          <img src={youtube} alt="Youtube" />
          <img src={facebook} alt="Facebook" />
          <img src={vk} alt="Vk" />
          <img src={telegram} alt="Telegram" />
        </Icons>
      </Social>
    </Container>
  );
}

export default Footer;
