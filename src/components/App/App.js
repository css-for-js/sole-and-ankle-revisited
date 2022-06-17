import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

import Header from '../Header';
import ShoeIndex from '../ShoeIndex';

const App = () => {
  const [sortId, setSortId] = React.useState('newest');

  return (
    <>
      <Header />
      <Main>
        <ShoeIndex sortId={sortId} setSortId={setSortId} />
      </Main>
    </>
  );
};

const Main = styled.main`
  padding: 64px 32px;

  @media ${QUERIES.tabletAndDown} {
    padding: 48px 32px;
  }

  @media ${QUERIES.phoneAndDown} {
    padding: 48px 16px;
  }
`;

export default App;
