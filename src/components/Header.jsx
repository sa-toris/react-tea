import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Button from './Button';
import LogoTea from './LogoTea';

import cart from '../assets/img/cart.svg';

const HeaderTea = styled.div`
  border-bottom: 1px solid #f6f6f6;
  padding: 40px 0;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      margin: 0px 45px;
    }
  }
`;

const HeaderCart = styled.div``;

const ButtonCart = styled(Button)`
  display: flex;
  align-items: center;
  line-height: 23px;
  padding: 11px 21px;

  span {
    display: flex;
    font-weight: 600;
    font-size: 21px;
    &:not(:last-child):after {
      content: '';
      margin-left: 14px;
      margin-right: 14px;
      background: #000000;
      border: 1px solid rgba(0, 0, 0, 0.49);
    }
  }

  img {
    width: 18px;
    height: 18px;
    margin-right: 8px;
    margin-bottom: 1px;
  }
`;

function Header() {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  return (
    <HeaderTea>
      <Container>
        <LogoTea />
        <Menu>
          <ul>
            <li>Каталог</li>
            <li>Оплата</li>
            <li>Доставка</li>
            <li>О нас</li>
            <li>Контакты</li>
          </ul>
        </Menu>
        <HeaderCart>
          <a href="http://">
            <ButtonCart>
              <span>{totalPrice} ₽</span>
              <img src={cart} alt="Cart" />
              <span>{totalCount}</span>
            </ButtonCart>
          </a>
        </HeaderCart>
      </Container>
    </HeaderTea>
  );
}

export default Header;
