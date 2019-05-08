import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import './config/reactotron';

import { GlobalStyle } from './styles/global';

import { Wrapper, Container, Content } from './styles/components';

import ErrorBox from './components/ErrorBox';
import Header from './components/Header';
import Player from './components/Player';
import SideBar from './components/Sidebar';

import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <GlobalStyle />
        <Container>
          <SideBar />
          <Content>
            <ErrorBox />
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
