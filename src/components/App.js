import React, { useState } from 'react';
import styled from 'styled-components';
import GameSection from './GameSection';
import HomeSection from './HomeSection';

const AnyPageRoot = styled.div`
  padding: 30px;
`;

const App = () => {
  const [currentPage, setCurrentPage] = useState('setup');

  switch(currentPage){
    case 'setup':
      return <AnyPageRoot><HomeSection navigateToGame={() => setCurrentPage('game')} /></AnyPageRoot>
    case 'game':
      return <AnyPageRoot><GameSection /></AnyPageRoot>;
  }
}

export default App;