import React from 'react';

import { GlobalStyle } from './styles/global';

import { Wrapper, Container } from './styles/components';

import Player from './components/Player';
import SideBar from './components/Sidebar';

const App = () => (
  <Wrapper>
    <GlobalStyle />
    <Container>
      <SideBar />
    </Container>
    <Player />
  </Wrapper>
);

export default App;
