import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotron';

import { GlobalStyle } from './styles/global';

import { Wrapper, Container, Content } from './styles/components';

import Header from './components/Header';
import Player from './components/Player';
import Routes from './routes';
import SideBar from './components/Sidebar';

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <GlobalStyle />
      <Container>
        <SideBar />
        <Content>
          <Header />
          <Routes />
        </Content>
      </Container>
      <Player />
    </Wrapper>
  </BrowserRouter>
);

export default App;
