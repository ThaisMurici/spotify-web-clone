import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
  <Container>
    <Search>
      <input type="Search" />
    </Search>

    <User>
      <img src="https://avatars3.githubusercontent.com/u/16256916?v=4" alt="Avatar" />
      Thais Moraes
    </User>
  </Container>
);

export default Header;
