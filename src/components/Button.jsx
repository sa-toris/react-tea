import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  background-color: #50b360;
  border-radius: 30px;
  padding: 10px 20px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  transition: background-color ${(props) => props.theme.other.duration} ease-in-out,
    border-color ${(props) => props.theme.other.duration} ease-in-out;
  border: 1px solid transparent;

  &,
  span {
    color: #fff;
  }

  i,
  span,
  path,
  svg {
    transition: all ${(props) => props.theme.other.duration} ease-in-out;
  }

  &:hover {
    background-color: #5fd172;
  }

  &:active {
    background-color: #3b8948;
    transform: translateY(1px);
  }
`;

function Button(props) {
  return <StyledButton {...props}></StyledButton>;
}

export default Button;
