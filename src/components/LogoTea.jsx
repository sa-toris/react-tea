import React from 'react';
import styled from 'styled-components';

import logo from '../assets/img/logo.svg';

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    /* margin-right: 5px; */
  }

  h1 {
    color: #000000;
    font-size: 20px;
    letter-spacing: 5px;
    text-transform: uppercase;
    font-weight: 400;
  }

  span {
    color: #50b360;
  }
`;

function LogoTea() {
  return (
    <div>
      <Logo>
        <img src={logo} alt="Logo" />
        <h1>
          Tea <span>House</span>
        </h1>
      </Logo>
    </div>
  );
}

export default LogoTea;
