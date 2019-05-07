import React from 'react';

import { GlobalStyle } from './styles/global';

import { Wrapper, Container, Content } from './styles/components';

import Header from './components/Header';
import Player from './components/Player';
import SideBar from './components/Sidebar';

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Container>
      <SideBar />
      <Content>
        <Header />
      </Content>
    </Container>
    <Player />
  </Wrapper>
);

export default App;
