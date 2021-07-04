import React from 'react';
import { Route } from 'react-router-dom';

import styled from 'styled-components';
import { Header, Slider, Footer } from './components';
import { Home } from './pages';
import './App.scss';

const Wrapper = styled.div`
  width: calc(100vw - 100px);
  height: 100%;
  background-color: #fff;
  margin: 0 auto;
  border-radius: 10px;
  max-width: 1400px;
`;

const Content = styled.div`
  padding: 40px 0;
`;

function App() {
  return (
    <Wrapper>
      <Header />
      <Slider />
      <Content>
        <Route path="/" component={Home} exact />
      </Content>
      <Footer />
    </Wrapper>
  );
}

export default App;
