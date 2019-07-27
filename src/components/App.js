import React, { useState } from 'react';
import styled from 'styled-components';
import ControllableGameSection from './ControllableGameSection';
import HomeSection from './HomeSection';

const AnyPageRoot = styled.div`
  padding: 30px;
`;

const App = () => {
  const [gameSize, setGameSize] = useState(null);

  if (gameSize)
    return <AnyPageRoot><ControllableGameSection gameSize={3} /></AnyPageRoot>;
  else
    return <AnyPageRoot><HomeSection navigateToGame={setGameSize} /></AnyPageRoot>
}

export default App;