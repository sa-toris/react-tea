import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';

import Button from '../Button';

const Tea = styled.div`
  width: 280px;
  text-align: center;
  margin-bottom: 65px;

  &:not(:nth-of-type(4n)) {
    margin-right: 3.7%;
  }

  img {
    width: 260px;
  }

  h4 {
    font-size: 20px;
    font-weight: 900;
    letter-spacing: 1%;
    margin-bottom: 20px;
  }
`;

const TeaWeight = styled.div`
  ul {
    display: flex;
    flex: 1;

    &:first-of-type {
      margin-bottom: 6px;
    }

    li {
      padding: 8px;
      flex: 1;
      cursor: pointer;
      font-weight: 600;
      font-size: 14px;
      &.active {
        background: #ffffff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.04);
        border-radius: 5px;
        cursor: auto;
      }
      &.disabled {
        opacity: 0.4;
        pointer-events: none;
      }
    }
  }
`;

const TeaBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

const TeaPrice = styled.div`
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.015em;
`;

const ButtonAdd = styled(Button)`
  svg {
    margin-right: 2px;
  }

  span {
    font-weight: 600;
    font-size: 16px;
  }

  &:hover {
    i {
      background-color: #fff;
      color: #000000;
    }
  }

  i {
    display: inline-block;
    border-radius: 30px;
    color: #fff;
    font-weight: 600;
    width: 22px;
    height: 22px;
    font-style: normal;
    font-size: 13px;
    line-height: 22px;
    position: relative;
    top: -1px;
    left: 3px;
  }
`;

function TeaBlock({ id, name, imageUrl, price, weight, onClickAddTea, addedCount }) {
  const availableWeight = [50, 100, 250];

  const [activeWeight, setActiveWeight] = React.useState(0);

  const onSelectWeight = (index) => {
    setActiveWeight(index);
  };

  const onAddTea = () => {
    const obj = {
      id,
      name,
      imageUrl,
      price,
      scale: availableWeight[activeWeight],
    };
    onClickAddTea(obj);
  };

  return (
    <Tea>
      <img src={imageUrl} alt="Tea" />
      <h4>{name}</h4>
      <TeaWeight>
        <ul>
          {availableWeight.map((scale, index) => (
            <li
              key={scale}
              onClick={() => onSelectWeight(index)}
              className={classNames({
                active: activeWeight === index,
                disabled: !weight.includes(scale),
              })}>
              {scale} грамм
            </li>
          ))}
        </ul>
      </TeaWeight>
      <TeaBottom>
        <TeaPrice>{price} ₽</TeaPrice>
        <ButtonAdd onClick={onAddTea}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {addedCount && <i>{addedCount}</i>}
        </ButtonAdd>
      </TeaBottom>
    </Tea>
  );
}

TeaBlock.propTypes = {
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  price: PropTypes.number,
  weight: PropTypes.arrayOf(PropTypes.number),
  onClickAddTea: PropTypes.func,
  addedCount: PropTypes.number,
};

TeaBlock.defaultProps = {
  name: '---',
  price: 0,
  weight: [],
};

export default TeaBlock;
