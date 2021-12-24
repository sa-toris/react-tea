import React from 'react';
import Button from './Button';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid $gray-line;
  padding-top: 30px;
  margin-top: 30px;
`;

const ItemImg = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  width: 10%;

  img {
    width: 80px;
    height: 80px;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;

  h3 {
    font-weight: bold;
    font-size: 22px;
    line-height: 27px;
    letter-spacing: 0.01em;
  }

  p {
    font-size: 18px;
    color: #8d8d8d;
  }
`;

const ItemCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 13%;

  b {
    font-size: 22px;
  }
`;

const MinusBtn = styled.div`
  cursor: pointer;

  svg {
    path:first-of-type {
      display: none;
    }
  }
`;

const PlusBtn = styled.div`
  cursor: pointer;
`;

const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;

  b {
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 0.01em;
  }
`;

const ItemRemove = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 4%;
  background-color: none;

  svg {
    transform: rotate(45deg);
  }

  button {
    svg {
      width: 11.5px;
      height: 11.5px;
      position: relative;
    }
  }
`;

const CartItem = ({ id, name, scale, totalPrice, totalCount, onRemove, onMinus, onPlus }) => {
  const handleRemoveClick = () => {
    onRemove(id);
  };

  const handlePlusItem = () => {
    onPlus(id);
  };

  const handleMinusItem = () => {
    onMinus(id);
  };

  return (
    <Container>
      <ItemImg>
        <img
          src="https://static-sl.insales.ru/images/products/1/4945/156578641/_MG_1830.jpg"
          alt="Tea"
        />
      </ItemImg>
      <ItemInfo>
        <h3>{name}</h3>
        <p>{scale} грамм</p>
      </ItemInfo>
      <ItemCount>
        <MinusBtn onClick={handleMinusItem}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#50b360"
            />
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#50b360"
            />
          </svg>
        </MinusBtn>
        <b>{totalCount}</b>
        <PlusBtn onClick={handlePlusItem}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#50b360"
            />
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#50b360"
            />
          </svg>
        </PlusBtn>
      </ItemCount>
      <ItemPrice>
        <b>{totalPrice} ₽</b>
      </ItemPrice>
      <ItemRemove>
        <Button onClick={handleRemoveClick} outline>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
              fill="#ffffff"
            />
            <path
              d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
              fill="#ffffff"
            />
          </svg>
        </Button>
      </ItemRemove>
    </Container>
  );
};

export default CartItem;
