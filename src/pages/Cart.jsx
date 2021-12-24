import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { CartItem, Button } from '../components';
import { clearCart, removeCartItem, plusCartItem, minusCartItem } from '../redux/actions/cart';

import cartEmptyImage from '../assets/img/empty-cart.png';
import cart from '../assets/img/cart.svg';
import cartClear from '../assets/img/cartClear.svg';
import cartBack from '../assets/img/cartBack.svg';

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const CartContainer = styled.div`
  max-width: 820px;
  margin: 90px auto;
`;

const CartTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    display: flex;
    align-items: center;
    font-size: 32px;

    img {
      position: relative;
      top: -2px;
      width: 30px;
      height: 30px;
      margin-right: 10px;
    }
  }
`;

const CartClear = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    display: inline-block;
    margin-left: 7px;
    color: #b6b6b6;
    font-size: 18px;
  }

  span,
  img {
    transition: all 0.15 ease-in-out;
  }
`;

const ContentItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const CartBottom = styled.div`
  margin: 50px 0;
`;

const CartDetails = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 22px;
  }
`;

const CartButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
`;

const GoBackBtn = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 210px;

  span {
    color: ;
    font-weight: 500;
    font-weight: 600;
  }

  img {
    margin-right: 12px;
    path {
      fill: transparent;
      stroke-width: 2;
    }
  }

  a {
    text-decoration: none;
  }
`;

const CartEmpty = styled.div`
  margin: 0 auto;
  width: 560px;
  text-align: center;

  h2 {
    font-size: 32px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    line-height: 145.4%;
    letter-spacing: 0.01em;
    color: #777777;
  }

  icon {
    position: relative;
    top: 2px;
  }

  img {
    display: block;
    width: 300px;
    margin: 45px auto 60px;
  }
`;

const PayBtn = styled(Button)`
  font-size: 16px;
  font-weight: 600;
  width: 210px;
  padding: 16px;
`;

const BackBtn = styled(Link, Button)`
  padding: 12px 0 14px;
  width: 230px;
  margin: 0 auto;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;

  background-color: black;

  &:hover,
  &:active {
    text-decoration: none;
    background-color: ;
  }
`;

function Cart() {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const addedTeas = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearCart = () => {
    if (window.confirm('Вы действительно хотите очистить корзину?')) {
      dispatch(clearCart());
    }
  };

  const onRemoveItem = (id) => {
    if (window.confirm('Вы действительно хотите удалить?')) {
      dispatch(removeCartItem(id));
    }
  };

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id));
  };

  const onMinusItem = (id) => {
    dispatch(minusCartItem(id));
  };

  const onClickOrder = () => {
    console.log('ВАШ ЗАКАЗ', items);
  };

  return (
    <Container>
      {totalCount ? (
        <CartContainer>
          <CartTop>
            <h2>
              <img src={cart} alt="Cart" />
              Корзина
            </h2>
            <CartClear>
              <img src={cartClear} alt="cartClear" />
              <span onClick={onClearCart}>Очистить корзину</span>
            </CartClear>
          </CartTop>
          <ContentItems>
            {addedTeas.map((obj) => (
              <CartItem
                key={obj.id}
                id={obj.id}
                name={obj.name}
                scale={obj.scale}
                totalPrice={items[obj.id].totalPrice}
                totalCount={items[obj.id].items.length}
                onRemove={onRemoveItem}
                onMinus={onMinusItem}
                onPlus={onPlusItem}
              />
            ))}
          </ContentItems>
          <CartBottom>
            <CartDetails>
              <span>
                Всего: <b>{totalCount} шт.</b>
              </span>
              <span>
                Сумма заказа: <b>{totalPrice} ₽</b>
              </span>
            </CartDetails>
            <CartButtons>
              <GoBackBtn>
                <img src={cartBack} alt="cartBack" />
                <Link to="/">
                  <span>Вернуться назад</span>
                </Link>
              </GoBackBtn>
              <PayBtn onClick={onClickOrder}>
                <span>Оплатить сейчас</span>
              </PayBtn>
            </CartButtons>
          </CartBottom>
        </CartContainer>
      ) : (
        <CartEmpty>
          <h2>
            Корзина пустая <i>😕</i>
          </h2>
          <p>
            Вероятней всего, вы не заказывали ещё пиццу.
            <br />
            Для того, чтобы заказать пиццу, перейди на главную страницу.
          </p>
          <img src={cartEmptyImage} alt="Empty cart" />
          <BackBtn to="/">
            <span>Вернуться назад</span>
          </BackBtn>
        </CartEmpty>
      )}
    </Container>
  );
}

export default Cart;
